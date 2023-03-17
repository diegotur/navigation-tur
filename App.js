import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import ShopNavigator from './src/Navigators/ShopNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_700Bold
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ShopNavigator />
  );
}