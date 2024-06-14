import React, {useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  getBalance,
  getMastercardDetails,
  getRecentTransactions,
} from '../../../api/cards';
import {
  BalanceData,
  MastercardData,
  RecentTransactionData,
} from '../../../modals';
import PaymentDueCard from '../../../atomic/molecules/payment.due.card/payment.due.component';
import CurrentBalanceCard from '../../../atomic/molecules/current.balance.card/current.balance.component';
import RecentTransactionCard from '../../../atomic/molecules/recent.transaction.card/recent.transaction.component';
import CardMenuCard from '../../../atomic/molecules/card.menu.card/card.menu.card.component';
import CardDetailCard from '../../../atomic/organisms/card.details/card.details.component';
import CardDefault from '../../../atomic/molecules/card.default/card.default.component';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigation';

type NavigationsProps = StackNavigationProp<
  RootStackParamList,
  'CardsControlStack'
>;

const CardsScreen = () => {
  const navigation = useNavigation<NavigationsProps>();
  const [balanceData, setBalanceData] = useState<BalanceData>({
    id: '',
    current: '',
    available: '',
    total: '',
    statementBalance: '',
    minimumPayment: '',
    dueDays: '',
    mcId: '',
  });
  const [mastercardData, setMastercardData] = useState<MastercardData[]>([
    {
      id: '',
      mastercardNumber: '',
      name: '',
      expiryDate: '',
      CVC: '',
      image: 0,
      locked: false,
    },
  ]);
  const [transactionsData, setTransactionsData] = useState<
    RecentTransactionData[]
  >([
    {
      id: '',
      name: '',
      image: 0,
      date: '',
      amount: '',
      points: '',
    },
  ]);
  const [cardLocked, setCardLocked] = useState<boolean>(false);

  const [displayCardDetails, setDisplayCardDetails] = useState<boolean>(false);

  const crossBtn = () => {
    return (
      <View>
        <Button
          onPress={() => setDisplayCardDetails(false)}
          title="X"
          color="#fff"
        />
      </View>
    );
  };
  useEffect(() => {
    if (displayCardDetails) {
      navigation.setOptions({
        headerLeft: () => crossBtn(),
      });
    } else {
      navigation.setOptions({headerLeft: () => null});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayCardDetails]);

  useEffect(() => {
    const data = getBalance();
    data && setBalanceData(data);
  }, []);

  useEffect(() => {
    const data = getMastercardDetails();
    setMastercardData(data);
  }, []);

  useEffect(() => {
    const data = getRecentTransactions();
    setTransactionsData(data);
  }, []);

  const onDetails = () => {
    setDisplayCardDetails(!displayCardDetails);
  };

  return (
    <ScrollView style={styles.marginBottom15}>
      {displayCardDetails ? (
        <CardDetailCard mastercards={mastercardData} />
      ) : (
        <CardDefault cardLocked={cardLocked} />
      )}
      <View style={styles.gap15}>
        <CardMenuCard
          cardLocked={cardLocked}
          setCardLocked={setCardLocked}
          onControls={() => {
            navigation.navigate('CardsControlStack');
          }}
          onDetails={onDetails}
        />
        <CurrentBalanceCard balanceData={balanceData} />
        <PaymentDueCard balanceData={balanceData} />
        <RecentTransactionCard transactionsData={transactionsData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  marginBottom15: {marginBottom: 15},
  gap15: {gap: 15},
});

export default CardsScreen;
