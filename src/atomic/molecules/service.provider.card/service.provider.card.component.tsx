import {View, Image, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import MCButton from '../../atoms/button/button.component';
import {ProvidersData} from '../../../modals';
import LinearGradient from 'react-native-linear-gradient';

type CardProps = {
  data: ProvidersData;
  cardStyle: StyleProp<ViewStyle>;
  onConnectClick: (data: string) => void;
};

const ServiceProviderCard = ({data, cardStyle, onConnectClick}: CardProps) => {
  return (
    <View style={[cardStyle, styles.container]}>
      <LinearGradient
        colors={
          !data.connected
            ? ['#fff', '#fff', '#fff']
            : ['#E35205', '#E35205', '#F98E20']
        }
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={[styles.gradientBorder]}>
        <View style={styles.providerContainer}>
          {data.connected && (
            <Image
              source={require('../../../images/checkmark.png')}
              style={styles.checkmark}
            />
          )}
          <Image source={data.image} style={styles.providerImage} />
          <MCButton
            title={!data.connected ? 'Connect' : 'Connected'}
            // eslint-disable-next-line react-native/no-inline-styles
            btnStyle={{
              ...styles.btnStyle,
              backgroundColor: !data.connected ? '#fff' : 'transparent',
            }}
            buttonText={{
              ...styles.buttonText,
              color: !data.connected ? '#E35205' : '#fff',
            }}
            onPress={() => !data.connected && onConnectClick(data.id)}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  providerContainer: {
    height: 178,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  gradientBorder: {
    padding: 1,
    borderRadius: 7,
  },
  checkmark: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 5,
    top: 5,
  },
  providerImage: {width: 72, height: 72},
  btnStyle: {
    height: 38,
    width: 102,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default ServiceProviderCard;
