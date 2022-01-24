import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AppScreen from '../screens/AppScreen/AppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationContainerRef} from '@react-navigation/native';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WifiScreen from '../screens/Settings/pages/WifiScreen';

const Stack = createNativeStackNavigator();

let navigator: NavigationContainerRef;

const setTopLevelNavigator = (ref: NavigationContainerRef) => {
  navigator = ref;
};

const RootHome = () => {
  return (
    <NavigationContainer independent={true} ref={setTopLevelNavigator}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AppScreen" component={AppScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="WifiScreen" component={WifiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootHome;
