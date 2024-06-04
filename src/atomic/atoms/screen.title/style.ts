import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  flex: 1;
`;

export const StyledText = styled.Text`
  font-size: ${({theme}) => theme.font_size.xxxlarge}px;
  align-self: center;
`;
