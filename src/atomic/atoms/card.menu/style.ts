import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const StyledText = styled.Text`
  margin-top: ${({theme}) => theme.margin.small}px;
`;
