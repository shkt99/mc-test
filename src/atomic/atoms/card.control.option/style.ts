import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 20px;
  padding-vertical: 15px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.colors.grey100};
  width: 100%;
  height: 74px;
`;

export const MenuOptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: ${({theme}) => theme.width[24]}px;
  height: ${({theme}) => theme.height[24]}px;
  margin-right: ${({theme}) => theme.gap[20]}px;
`;

export const Option = styled.Text`
  font-size: ${({theme}) => theme.font_size.medium}px;
  line-height: ${({theme}) => theme.font_size.medium}px;
`;

export const MenuOptionvalueContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MenuOptionValue = styled.Text`
  font-size: ${({theme}) => theme.font_size.small}px;
  line-height: ${({theme}) => theme.font_size.small}px;
`;

export const Chevron = styled.Image`
  margin-left: ${({theme}) => theme.margin.small}px;
`;
