import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './components/index';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>

  );
}

