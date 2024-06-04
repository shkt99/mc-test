import {Alert, StyleSheet, View} from 'react-native';
import React from 'react';
import TextHeader from '../../atoms/text/text.component';
import {BalanceData} from '../../../modals';
import CurrentBalanceAmount from '../../atoms/current.balance.amount/current.balance.amount';
import MCButton from '../../atoms/button/button.component';

type PaymentDueCardProps = {
  balanceData: BalanceData;
};

const PaymentDueCard = ({balanceData}: PaymentDueCardProps) => {
  return (
    <View style={styles.container}>
      <TextHeader
        text={`Payment Due in ${balanceData.dueDays} days`}
        style={styles.title}
      />
      <View style={styles.balanceContainer}>
        <View style={styles.statementBalanceContainer}>
          <TextHeader text={'Statement Balance'} style={styles.header} />
          <CurrentBalanceAmount
            balance={balanceData.statementBalance}
            style={styles.currentBalance}
          />
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{...styles.statementBalanceContainer, borderRightWidth: 0}}>
          <TextHeader text={'Minimum Payment'} style={styles.header} />
          <CurrentBalanceAmount
            balance={balanceData.minimumPayment}
            style={styles.minPayment}
          />
        </View>
      </View>
      <View style={styles.alignCenter}>
        <MCButton
          title={'Make a payment'}
          buttonText={styles.buttonText}
          btnStyle={styles.btnStyle}
          onPress={() => {
            return Alert.alert('Make a payment');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 218,
    justifyContent: 'center',
  },
  title: {
    lineHeight: 24,
    fontSize: 18,
    fontWeight: '600',
    color: '#E35205',
    alignSelf: 'center',
  },
  balanceContainer: {
    marginHorizontal: 25,
    marginVertical: 25,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  header: {lineHeight: 18, fontSize: 14, color: '#5C5C5C'},
  statementBalanceContainer: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#EBEBEB',
    paddingHorizontal: 21,
    gap: 3,
  },
  alignCenter: {alignItems: 'center'},
  buttonText: {
    color: '#E35205',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
  },
  btnStyle: {
    width: 327,
    height: 48,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  currentBalance: {
    lineHeight: 28,
    fontSize: 22,
    color: '#333333',
  },
  minPayment: {
    lineHeight: 28,
    fontSize: 22,
    color: '#333333',
  },
});

export default PaymentDueCard;
