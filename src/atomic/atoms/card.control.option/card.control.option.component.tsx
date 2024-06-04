import React from 'react';
import {CardControlOptionsData} from '../../../modals';
import {
  Container,
  MenuOptionContainer,
  StyledImage,
  Option,
  MenuOptionvalueContainer,
  MenuOptionValue,
  Chevron,
} from './style';

type CardControlOptionProps = {
  data: CardControlOptionsData;
};

const CardControlOption = ({data}: CardControlOptionProps) => {
  return (
    <Container>
      <MenuOptionContainer>
        <StyledImage source={data.leftIcon} />
        <Option>{data.optionName}</Option>
      </MenuOptionContainer>
      <MenuOptionvalueContainer>
        <MenuOptionValue>{data.optionSelectedValue}</MenuOptionValue>
        <Chevron source={data.rightIcon} />
      </MenuOptionvalueContainer>
    </Container>
  );
};

export default CardControlOption;
