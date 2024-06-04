import {
  View,
  Text,
  Image,
  Alert,
  Dimensions,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import {MastercardData} from '../../../modals';
import CardInfo from '../../molecules/card.details/card.details.card.component';

const CARD_WIDTH = 260;
const SPACING = 30;

type CardDetailCardProps = {
  mastercards: MastercardData[];
};
const CardDetailCard = ({mastercards}: CardDetailCardProps) => {
  const [masterCardDetails, setMasterCardDetails] = useState<MastercardData>({
    CVC: '',
    expiryDate: '',
    id: '',
    mastercardNumber: '',
    name: '',
    image: 0,
    locked: false,
  });

  useEffect(() => {
    setMasterCardDetails(mastercards[0]);
  }, [mastercards]);
  const copyToClipboard = () => {
    const textToCopy = masterCardDetails.mastercardNumber;
    Clipboard.setString(textToCopy);
    Alert.alert('Copied to Clipboard');
  };
  const {width} = Dimensions.get('window');

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / (CARD_WIDTH + SPACING),
    );
    setMasterCardDetails(mastercards[index]);
  };

  return (
    <>
      <View style={styles.alignCenter}>
        <Text style={styles.mastercardNumber}>
          Mastercard •••• {masterCardDetails.mastercardNumber.slice(-4)}
        </Text>
        <FlatList
          data={mastercards}
          horizontal
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + SPACING}
          decelerationRate="fast"
          contentContainerStyle={{
            paddingHorizontal: (width - CARD_WIDTH) / 2 - SPACING / 2,
          }}
          onMomentumScrollEnd={handleScrollEnd}
          renderItem={({item}) => (
            <View style={{width: CARD_WIDTH, marginHorizontal: SPACING / 2}}>
              <Image source={item.image} style={styles.cardImage} />
            </View>
          )}
        />

        <Image
          source={require('../../../images/appleWallet.png')}
          style={styles.appleWallet}
        />
        <CardInfo
          masterCardDetails={masterCardDetails}
          copyToClipboard={copyToClipboard}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  alignCenter: {alignItems: 'center'},
  mastercardNumber: {marginTop: 25, marginBottom: 10},
  cardImage: {width: CARD_WIDTH, height: 160},
  appleWallet: {width: 136, height: 42, marginTop: 20},
});

export default CardDetailCard;
