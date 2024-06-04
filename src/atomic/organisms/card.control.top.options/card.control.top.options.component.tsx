import {StyleSheet, View} from 'react-native';
import React from 'react';
import MCButton from '../../atoms/button/button.component';

const CardControlTopOptions = () => {
  return (
    <>
      <View style={styles.container}>
        <MCButton
          title={'Reset PIN'}
          onPress={() => {}}
          btnStyle={styles.btnStyle}
          buttonText={styles.buttonText}
          image={require('../../../images/resetPin.png')}
          imgStyle={styles.buttonImage}
        />
        <MCButton
          title={'Notifications'}
          onPress={() => {}}
          btnStyle={styles.btnStyle}
          buttonText={styles.buttonText}
          image={require('../../../images/notification.png')}
          imgStyle={styles.buttonImage}
        />
      </View>
      <View style={styles.container}>
        <MCButton
          title={'Request New Card'}
          onPress={() => {}}
          btnStyle={styles.btnStyle}
          buttonText={styles.buttonText}
          image={require('../../../images/newCard.png')}
          imgStyle={styles.buttonImage}
        />
        <MCButton
          title={'Adjust Credit Limit'}
          onPress={() => {}}
          btnStyle={styles.btnStyle}
          buttonText={styles.buttonText}
          image={require('../../../images/limit.png')}
          imgStyle={styles.buttonImage}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  btnStyle: {
    width: 156,
    height: 92,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#E35205',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
  },
  buttonImage: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
});

export default CardControlTopOptions;
