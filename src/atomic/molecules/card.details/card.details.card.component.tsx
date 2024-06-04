import {View, StyleSheet} from 'react-native';
import React from 'react';
import CardDetail from '../../atoms/card.detail/card.detail.component';
import MCButton from '../../atoms/button/button.component';
import {MastercardData} from '../../../modals';

type CardInfoProps = {
  masterCardDetails: MastercardData;
  copyToClipboard: () => void;
};

const CardInfo = ({masterCardDetails, copyToClipboard}: CardInfoProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.marginHorizontal20}>
          <CardDetail
            title={'Card Number'}
            value={masterCardDetails.mastercardNumber.replace(
              /(\d{4})(?=\d)/g,
              '$1 ',
            )}
            boxStyle={styles.cardBoxStyle}
          />
        </View>
      </View>
      <View style={styles.cardDetailsContainer}>
        <CardDetail
          title={'Expiration Date'}
          value={masterCardDetails.expiryDate}
          boxStyle={styles.expiryDate}
        />

        <View>
          <CardDetail
            title={'CVC'}
            value={masterCardDetails.CVC}
            boxStyle={styles.cvc}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <MCButton
          title={'Copy Card Number'}
          buttonText={styles.btnText}
          btnStyle={styles.btnStyle}
          onPress={copyToClipboard}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', marginTop: 20},
  marginHorizontal20: {marginHorizontal: 20},
  cardBoxStyle: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ADADAD',
    width: '100%',
  },
  cardDetailsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expiryDate: {
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderColor: '#ADADAD',
  },
  cvc: {
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: '#ADADAD',
    width: '100%',
  },
  buttonContainer: {alignItems: 'center', marginVertical: 20},
  btnStyle: {
    width: 327,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  btnText: {
    color: '#E35205',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
});
export default CardInfo;
