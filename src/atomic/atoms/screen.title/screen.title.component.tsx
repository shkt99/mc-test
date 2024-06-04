import React from 'react';
import {Container, StyledText} from './style';

const ScreenTitle: React.FC<{header: string}> = ({header}) => {
  return (
    <Container>
      <StyledText>{header}</StyledText>
    </Container>
  );
};

export default ScreenTitle;
