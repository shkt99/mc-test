import styled from 'styled-components/native';

// export const Container = styled(View)<StyledViewProps>`
//   ${({style}) => style}// Apply dynamic styles passed via props
// `;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: 16px;
  line-height: 20px;
`;

export const Value = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 22px;
  line-height: 28px;
  font-weight: 600;
`;
