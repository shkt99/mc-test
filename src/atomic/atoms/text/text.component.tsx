import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';

export type TextProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

const TextHeader: React.FC<TextProps> = ({text, style}) => {
  return (
    <View>
      <Text style={style}>{text}</Text>
    </View>
  );
};

export default TextHeader;
