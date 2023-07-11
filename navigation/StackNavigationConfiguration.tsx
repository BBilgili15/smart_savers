import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationOptions } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import ChallengeDashBoardScreen from '../screens/ChallengeDashboardScreen';
import ChallengeScreen from '../screens/ChallengeScreen';
import ChartsScreen from '../screens/ChartsScreen';
import PocketsScreen from '../screens/PocketsScreen';
import HomeScreen from '../screens/HomeScreen';

type StackParams = {
  HomeScreen: undefined;
  ChallengeScreen: undefined;
  PocketsScreen: undefined;
  ChartsScreen: undefined;
  ChallengeDashBoardScreen:undefined
 
};

type HomeScreenNavigationProp = StackNavigationProp<StackParams, 'HomeScreen'>;

const Stack = createStackNavigator<StackParams>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen } />
      <Stack.Screen name="ChallengeScreen" component={ChallengeScreen} />
      <Stack.Screen name="PocketsScreen" component={PocketsScreen} />
      <Stack.Screen name="ChartsScreen" component={ChartsScreen} />
      <Stack.Screen name="ChallengeDashBoardScreen" component={ChallengeDashBoardScreen} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
