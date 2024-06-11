import {Image, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Container, StyledText} from './style';

type ConfirmationProps = {
  confirmationVisible: boolean;
  setConfirmationVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Confirmation = ({
  confirmationVisible,
  setConfirmationVisible,
}: ConfirmationProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (confirmationVisible) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.delay(1000),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setConfirmationVisible(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmationVisible]);

  return (
    <Animated.View style={{opacity: fadeAnim}}>
      <Container>
        <Image source={require('../../../images/confirmation.png')} />
        <StyledText>Connected</StyledText>
      </Container>
    </Animated.View>
  );
};

export default Confirmation;
