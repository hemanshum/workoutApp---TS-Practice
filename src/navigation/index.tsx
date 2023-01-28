import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import PlannerScreen from '../screen/PlannerScreen';

export type RootStackParamsList = {
  Root: undefined;
  Home: undefined;
  Planner: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();
const BottomTabs = createBottomTabNavigator<RootStackParamsList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator initialRouteName="Home">
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Planner" component={PlannerScreen} />
    </BottomTabs.Navigator>
  );
}
