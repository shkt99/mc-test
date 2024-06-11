import styled from 'styled-components/native';

type ConfirmationContainerProps = {
  confirmationVisible: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const ConfirmationContainer = styled.View<ConfirmationContainerProps>`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translateX(-100px) translateY(-150px);
  display: ${props => (props.confirmationVisible ? 'flex' : 'none')};
`;

export const ProviderContainer = styled.View`
  flex: 1;
  margin-vertical: 15px;
`;
