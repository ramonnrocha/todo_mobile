import { StatusBar } from 'react-native';
import {  ActivityIndicator, View } from 'react-native';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Home } from './src/screens';
import { Loading } from './src/components/Loading';


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <>
      {fontsLoaded ? <Home /> : <Loading />}
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}

