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
  const sortedTransactions = transactionsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  });

  const firstThree = sortedTransactions.slice(0, 3);

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
