import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RewardsRoutes} from '../stacks/rewards.stack';
import ScreenTitle from '../../../atomic/atoms/screen.title/screen.title.component';

type ScreenProps = StackScreenProps<RewardsRoutes, 'RewardsScreen'>;

const RewardsScreen: FC<ScreenProps> = () => {
  return <ScreenTitle header={'More Screen'} />;
};

export default RewardsScreen;
