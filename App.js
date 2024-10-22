import { StatusBar, SafeAreaView, View } from "react-native";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import mock from "./src/mocks/cesta";

import Cesta from "./src/telas/Cesta";

import { useCallback, useEffect, useState } from "react";
export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          MontserratRegular: Montserrat_400Regular,
          MontserratBold: Montserrat_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appReady) {
      SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View onLayout={onLayout}>
        <StatusBar backgroundColor={'#929b70'} />
        <Cesta {...mock} />
      </View>
    </SafeAreaView>
  );
}
