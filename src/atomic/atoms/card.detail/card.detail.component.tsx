import {View, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {Title, Value} from './style';

type CardDetailProps = {
  title: string;
  value: string;
  boxStyle: StyleProp<ViewStyle>;
};

const CardDetail = ({title, value, boxStyle}: CardDetailProps) => {
  return (
    <View style={boxStyle}>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </View>
  );
};

export default CardDetail;
