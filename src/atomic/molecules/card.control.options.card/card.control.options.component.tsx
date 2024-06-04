import {View} from 'react-native';
import React from 'react';
import {CardControlOptionsData} from '../../../modals';
import CardControlOption from '../../atoms/card.control.option/card.control.option.component';

type RecentTransactionsCardProps = {
  optionsData: CardControlOptionsData[];
};

const CardControlOptionsCard = ({optionsData}: RecentTransactionsCardProps) => {
  return (
    <View>
      {optionsData.map((option: CardControlOptionsData) => {
        return <CardControlOption data={option} key={option.id} />;
      })}
    </View>
  );
};

export default CardControlOptionsCard;
