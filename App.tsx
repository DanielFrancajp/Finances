import React, { useEffect } from "react";
//import AppLoading from "expo-app-loading";
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,

} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/themes';

import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from './src/routes/app.routes';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({

    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,

  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  /*if (!fontsLoaded) {
    return <AppLoading />
  }*/

  return (

    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>

  )
}