import {Image} from 'react-native';
import React from 'react';
import {Container, StyledText} from './style';

type CardMenuProps = {
  text: string;
  image: number;
  onPress: () => void;
};

const CardMenu = ({text, image, onPress}: CardMenuProps) => {
  return (
    <Container onPress={onPress}>
      <Image source={image} />
      <StyledText>{text}</StyledText>
    </Container>
  );
};

export default CardMenu;
