import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MoreRoutes} from '../stacks/More.stack';
import ScreenTitle from '../../../atomic/atoms/screen.title/screen.title.component';

type ScreenProps = StackScreenProps<MoreRoutes, 'MoreScreen'>;

const MoreScreen: FC<ScreenProps> = () => {
  return <ScreenTitle header={'More Screen'} />;
};

export default MoreScreen;
