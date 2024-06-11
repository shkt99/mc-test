import {View, StyleSheet} from 'react-native';
import React from 'react';
import CurrentBalanceAmount from '../../atoms/current.balance.amount/current.balance.amount';
import TextHeader from '../../atoms/text/text.component';
import ProgressBar from '../../atoms/progress.bar/progress.bar';
import {BalanceData} from '../../../modals';

type CurrentBalanceCardProps = {
  balanceData: BalanceData;
};
const CurrentBalanceCard = ({balanceData}: CurrentBalanceCardProps) => {
  return (
    <View style={styles.container}>
      <CurrentBalanceAmount
        balance={balanceData.current}
        style={styles.currentBalanceAmount}
      />
      <TextHeader
        text={'Current Balance'}
        style={styles.currentBalanceHeader}
      />
      <View style={styles.prgressBarContainer}>
        <ProgressBar
          progress={
            1 -
            parseFloat(balanceData.available) / parseFloat(balanceData.total)
          }
          width={327}
          color={'#7A9A02'}
        />
      </View>
      <View style={styles.creditContainer}>
        <View style={styles.creditInnerContainer}>
          <View style={styles.creditItemContainer}>
            <TextHeader
              text={'Available Credit:'}
              style={styles.amountHeader}
            />
            <CurrentBalanceAmount
              balance={balanceData.available}
              style={styles.amount}
            />
          </View>
          <View style={styles.creditItemContainer}>
            <TextHeader
              text={'Total Credit Limit:'}
              style={styles.amountHeader}
            />
            <CurrentBalanceAmount
              balance={balanceData.total}
              style={styles.amount}
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
    height: 206,
    justifyContent: 'center',
  },
  currentBalanceAmount: {
    fontWeight: '600',
    lineHeight: 36,
    fontSize: 30,
    color: '#333333',
    alignSelf: 'center',
  },
  currentBalanceHeader: {
    lineHeight: 18,
    fontSize: 14,
    color: '#5C5C5C',
    alignSelf: 'center',
    marginTop: 5,
  },
  prgressBarContainer: {alignSelf: 'center', marginTop: 20},
  creditContainer: {
    marginTop: 20,
    gap: 10,
  },
  creditInnerContainer: {alignSelf: 'center', width: 327},
  creditItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountHeader: {lineHeight: 18, fontSize: 14, color: '#333333'},
  amount: {
    lineHeight: 18,
    fontSize: 14,
    color: '#333333',
  },
});
export default CurrentBalanceCard;
