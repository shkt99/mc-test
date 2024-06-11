import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import {LoginData, ProvidersData} from '../../../modals';
import LoginForm from '../../molecules/login.form/login.form.component';

export const enum ModalHeight {
  SEVEN = 0.35,
}

interface ModalProps {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  modalHeight?: ModalHeight;
  data: ProvidersData;
  onConnect: (values: LoginData) => void;
  error: string;
}
const LoginModal: React.FC<ModalProps> = ({
  visibility,
  setVisibility,
  modalHeight = ModalHeight.SEVEN,
  data,
  onConnect,
  error,
}) => {
  const height = Dimensions.get('window').height;
  return (
    <Modal
      isVisible={visibility}
      backdropOpacity={0.3}
      swipeThreshold={(height - height * modalHeight) / 2}
      onSwipeComplete={() => setVisibility(false)}
      onBackdropPress={() => {
        setVisibility(false);
      }}
      swipeDirection={['down']}
      style={styles.modal}>
      <ScrollView
        style={[
          {
            ...styles.modalContainer,
            marginTop: height > 700 ? height * modalHeight : height * 0.15,
          },
        ]}>
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{...styles.modalTopColor, backgroundColor: data.color}}
          />
          <Pressable style={styles.cross}>
            <Text
              onPress={() => {
                setVisibility(false);
              }}
              style={styles.crossText}>
              X
            </Text>
          </Pressable>
          <View style={styles.alignCenter}>
            <Image source={data.image} style={styles.logo} />
            <Text style={styles.title}>Connect {data.name}</Text>
          </View>
          <View style={styles.loginFormContainer}>
            <LoginForm
              providerName={data.name}
              onConnect={onConnect}
              error={error}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {justifyContent: 'flex-end', margin: 0},
  modalContainer: {
    backgroundColor: 'white',
  },
  modalTopColor: {height: 10},
  cross: {
    alignSelf: 'flex-end',
    marginHorizontal: 15,
    marginTop: 15,
  },
  crossText: {fontSize: 18, fontWeight: '600'},
  alignCenter: {alignItems: 'center'},
  logo: {width: 72, height: 72},
  title: {fontSize: 22, fontWeight: '600', marginTop: 20},
  loginFormContainer: {
    width: 327,
    alignSelf: 'center',
    marginTop: 25,
  },
});
export default LoginModal;
