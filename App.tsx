import { StatusBar } from 'react-native';
import { ThemeProvider} from 'styled-components/native';
import { useFonts , Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';

import theme from './src/theme';

import { Routes } from './src/routes'

import * as SystemUI from 'expo-system-ui';

SystemUI.setBackgroundColorAsync('transparent');

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular,Roboto_700Bold });

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        { fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}