import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {PfmRoutes} from '../stacks/pfm.stack';
import ScreenTitle from '../../../atomic/atoms/screen.title/screen.title.component';

type ScreenProps = StackScreenProps<PfmRoutes, 'PfmScreen'>;

const PfmScreen: FC<ScreenProps> = () => {
  return <ScreenTitle header={'PFM  Screen'} />;
};

export default PfmScreen;
