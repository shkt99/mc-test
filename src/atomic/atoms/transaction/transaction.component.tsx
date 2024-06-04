import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

import CurrentBalanceAmount from '../current.balance.amount/current.balance.amount';
import TextHeader from '../text/text.component';
import {RecentTransactionData} from '../../../modals';

export type TransactionProps = {
  transaction: RecentTransactionData;
};

const Transaction = ({transaction}: TransactionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.justifyCenter}>
            <Image source={transaction.image} style={styles.image} />
          </View>
          <View style={styles.justifyCenter}>
            <TextHeader text={transaction.name} style={styles.header} />
            <TextHeader
              text={new Date(transaction.date)
                .toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                })
                .replace(',', '')}
              style={styles.date}
            />
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.rightContainer}>
            <CurrentBalanceAmount
              balance={transaction.amount}
              style={styles.header}
            />
            <TextHeader
              text={`+${transaction.points} pts`}
              style={styles.points}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 73,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#EBEBEB',
  },
  innerContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  leftContainer: {flexDirection: 'row', gap: 20},
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  justifyCenter: {justifyContent: 'center'},
  image: {width: 40, height: 40},
  header: {
    lineHeight: 20,
    fontSize: 16,
    color: '#333333',
  },
  date: {
    lineHeight: 18,
    fontSize: 14,
    color: '#ADADAD',
    alignSelf: 'center',
    marginTop: 5,
  },
  flexRow: {flexDirection: 'row'},
  points: {
    lineHeight: 18,
    fontSize: 14,
    color: '#618DFF',
    alignSelf: 'center',
    marginTop: 5,
  },
});
export default Transaction;
