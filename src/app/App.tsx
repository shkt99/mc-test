import 'react-native-gesture-handler';
import React, {FC} from 'react';
import Navigation from './Navigation';
import {ThemeProvider} from 'styled-components/native';
import {CommonTheme} from '../atomic/theme';
import {ProvidersProvider} from '../Context/providers/providers';

const App: FC = () => {
  return (
    <ProvidersProvider>
      <ThemeProvider theme={CommonTheme}>
        <Navigation />
      </ThemeProvider>
    </ProvidersProvider>
  );
};

export default App;
