import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${({theme}) => theme.gap[55]}px;
  background-color: ${({theme}) => theme.colors.white};
  padding-vertical: ${({theme}) => theme.gap[30]}px;
`;
