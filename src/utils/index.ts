import ReactNativeBiometrics from 'react-native-biometrics';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rnBiometrics = new ReactNativeBiometrics();

export const getItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return undefined;
  }
};

export const setItem = async (key: string, value: string) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    return undefined;
  }
};

export const enableFaceId = async () => {
  const biometricsEnabled = await getItem('biometricsEnabled');
  const {available} = await rnBiometrics.isSensorAvailable();
  if (!biometricsEnabled && available) {
    Alert.alert(
      'Biometric Login',
      'Would you like to use biometric login next time?',
      [
        {
          text: 'No',
          onPress: async () => {
            await setItem('biometricsEnabled', 'false');
          },
        },
        {
          text: 'Yes',
          onPress: async () => {
            await setItem('biometricsEnabled', 'true');
          },
        },
      ],
    );
  }
};

export const authenticate = async (cb: () => void) => {
  const biometricsEnabled = await getItem('biometricsEnabled');
  if (biometricsEnabled === 'true') {
    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm Biometrics'})
      .then(resultObject => {
        const {success} = resultObject;
        if (success) {
          cb();
        }
      });
  }
};

export const formatMoney = (balance: string) => {
  const numericBalance = parseFloat(
    parseFloat(parseFloat(balance).toPrecision(4)).toFixed(2),
  );

  if (isNaN(numericBalance)) {
    return 'Invalid Value';
  }

  if (numericBalance >= 100000000) {
    return (numericBalance / 1000000).toFixed(0) + 'M';
  } else if (numericBalance <= -100000000) {
    return (numericBalance / 1000000).toFixed(0) + 'M';
  }

  return numericBalance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
