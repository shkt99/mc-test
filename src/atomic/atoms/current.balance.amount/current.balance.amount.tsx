import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {formatMoney} from '../../../utils';

export type CurrentBalanceProps = {
  balance: string;
  style?: StyleProp<TextStyle>;
};
const CurrentBalanceAmount = ({balance, style}: CurrentBalanceProps) => {
  return (
    <View>
      <Text style={style}>{formatMoney(balance)}</Text>
    </View>
  );
};

export default CurrentBalanceAmount;
