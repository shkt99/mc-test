import {View} from 'react-native';
import React from 'react';
import {RecentTransactionData} from '../../../modals';
import Transaction from '../../atoms/transaction/transaction.component';
import TransactionHeader from '../../atoms/transaction.header/transaction.header.component';

type RecentTransactionsCardProps = {
  transactionsData: RecentTransactionData[];
};

const RecentTransactionCard = ({
  transactionsData,
}: RecentTransactionsCardProps) => {
  const firstThree = transactionsData.slice(0, 3);

  return (
    <View>
      <TransactionHeader />
      {firstThree.map((transaction: RecentTransactionData) => {
        return <Transaction key={transaction.id} transaction={transaction} />;
      })}
    </View>
  );
};

export default RecentTransactionCard;
