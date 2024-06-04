import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.black};
  opacity: 0.5;
  height: 188px;
  width: 188px;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  margin-top: ${({theme}) => theme.margin.large}px;
  font-size: ${({theme}) => theme.font_size.large}px;
  color: ${({theme}) => theme.colors.white};
`;
