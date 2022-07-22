import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomingNavigation from './WelcomingNavigation';
import TabNavigation from './TabNavigation';

const HomeStack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Welcoming"
        component={WelcomingNavigation}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="App"
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}
