import {StyleSheet, View} from 'react-native';
import React from 'react';
import MCButton from '../../atoms/button/button.component';

type OnboardingButtonsProps = {
  providerConnected: boolean;
  handleContinueClick: () => void;
  handleSkipForNowClick: () => void;
};

const OnboardingButtons = ({
  providerConnected,
  handleContinueClick,
  handleSkipForNowClick,
}: OnboardingButtonsProps) => {
  return (
    <View style={styles.container}>
      <MCButton
        title={'Continue'}
        disable={!providerConnected}
        btnStyle={styles.btnStyle}
        buttonText={styles.buttonText}
        onPress={handleContinueClick}
      />
      <MCButton
        title={'Skip for now'}
        buttonText={{...styles.buttonText, color: '#E35205'}}
        // eslint-disable-next-line react-native/no-inline-styles
        btnStyle={{
          ...styles.btnStyle,
          backgroundColor: '#fff',
        }}
        onPress={handleSkipForNowClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {gap: 15, marginBottom: 35, alignItems: 'center'},
  btnStyle: {
    width: 327,
    height: 48,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default OnboardingButtons;
