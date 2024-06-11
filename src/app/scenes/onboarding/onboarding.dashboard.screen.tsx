import React, {useContext, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import ServiceProviderContainer from '../../../atomic/organisms/service.provider.container/service.provider.container.component';
import {LoginData, ProvidersData} from '../../../modals';
import LoginModal from '../../../atomic/organisms/login.modal/login.modal.component';
import Confirmation from '../../../atomic/atoms/confirmation/confirmation.component';
import {connectWithProvider} from '../../../api/providers';
import AllSetPopup from '../../../atomic/molecules/allset.popup/allset.popup.component';
import {ProvidersContext} from '../../../Context/providers/providers';
import {enableFaceId} from '../../../utils';
import OnboardingTile from '../../../atomic/molecules/onboarding.title/onboarding.title.component';
import OnboardingButtons from '../../../atomic/molecules/onborading.buttons/onboarding.buttons.component';
import {ConfirmationContainer, Container, ProviderContainer} from './style';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigation';

type NavigationsProps = StackNavigationProp<RootStackParamList, 'BottomTab'>;

const OnboardingDashboardScreen = () => {
  const navigation = useNavigation<NavigationsProps>();
  const {providersData, setProvidersData} = useContext(ProvidersContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [confirmationVisible, setConfirmationVisible] =
    useState<boolean>(false);
  const [modalData, setModalData] = useState<ProvidersData>({
    id: '',
    name: '',
    image: 0,
    color: '',
    connected: false,
  });

  const [error, setError] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [providerConnected, setProviderConnected] = useState<boolean>(false);

  useEffect(() => {
    enableFaceId();
  }, []);

  useEffect(() => {
    providersData.map(item => {
      if (item.connected) {
        setProviderConnected(true);
      }
    });
  }, [providersData]);

  const onProviderConnectClick = (id: string) => {
    setError('');
    const itemClicked = providersData.find(provider => provider.id === id);
    itemClicked && setModalData(itemClicked);
    itemClicked && setOpenModal(true);
  };

  const onConnect = (values: LoginData) => {
    const connected = connectWithProvider(
      values.email,
      values.password,
      modalData,
    );
    if (connected) {
      setConfirmationVisible(true);
      setError('');
      setModalData({...modalData, connected});
      setProvidersData((prev: ProvidersData[]) => {
        return prev.map(item =>
          item.name === modalData.name ? {...item, connected: true} : item,
        );
      });
      values && !confirmationVisible && setOpenModal(false);
    } else {
      setError('Invalid email or password');
    }
  };

  const handleContinueClick = () => {
    setShowPopup(true);
  };
  const handleSkipForNowClick = () => {
    navigation.navigate('BottomTab');
  };

  const onCrossClick = () => {
    setShowPopup(false);
  };

  const onViewDashBoardClick = () => {
    setShowPopup(false);
    navigation.navigate('BottomTab');
  };
  return (
    <>
      {showPopup && (
        <AllSetPopup
          onCrossClick={onCrossClick}
          onViewDashBoardClick={onViewDashBoardClick}
        />
      )}
      <ConfirmationContainer confirmationVisible={confirmationVisible}>
        <Confirmation
          confirmationVisible={confirmationVisible}
          setConfirmationVisible={setConfirmationVisible}
        />
      </ConfirmationContainer>

      <Container>
        <OnboardingTile />
        <ProviderContainer>
          <ServiceProviderContainer
            providersData={providersData}
            onProviderConnectClick={onProviderConnectClick}
          />
        </ProviderContainer>
        <OnboardingButtons
          providerConnected={providerConnected}
          handleContinueClick={handleContinueClick}
          handleSkipForNowClick={handleSkipForNowClick}
        />
        <LoginModal
          visibility={openModal}
          setVisibility={setOpenModal}
          data={modalData}
          onConnect={onConnect}
          error={error}
        />
      </Container>
    </>
  );
};

export default OnboardingDashboardScreen;
