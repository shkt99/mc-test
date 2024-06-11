import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

type CardDefaultProps = {
  cardLocked: boolean;
};
const CARD_WIDTH = 260;

const CardDefault = ({cardLocked}: CardDefaultProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mastercardNumber}>Mastercard •••• 1234</Text>
      <View style={styles.imageContainer}>
        <Image
          source={
            cardLocked
              ? require('../../../images/lockedMastercard.png')
              : require('../../../images/mastercard.png')
          }
          style={styles.cardImage}
        />
        <Image
          source={require('../../../images/halfCard.png')}
          style={styles.halfCard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginBottom: -80},
  mastercardNumber: {marginTop: 25, marginBottom: 10},
  cardImage: {width: CARD_WIDTH, height: 160},
  appleWallet: {width: 136, height: 42, marginTop: 20},
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  halfCard: {position: 'absolute', right: 0},
});

export default CardDefault;
