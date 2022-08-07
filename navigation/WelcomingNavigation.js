import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/welcoming/OnboardingScreen';
import LogInScreen from '../screens/welcoming/LogInScreen';
import LogInWithPhoneScreen from '../screens/welcoming/LogInWithPhoneScreen';
import SighInScreen from '../screens/welcoming/SighInScreen';
import VerifyPhoneNumberScreen from '../screens/welcoming/VerifyPhoneNumberScreen';
import LocationScreen from '../screens/welcoming/LocationScreen';
import {headerBarStyle} from '../styles/headerBarStyle';

const WelcomingStack = createNativeStackNavigator();

export default function WelcomingNavigation() {
  return (
    <WelcomingStack.Navigator screenOptions={headerBarStyle}>
      <WelcomingStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{title: ''}}
      />
      <WelcomingStack.Screen
        name="Log In"
        component={LogInScreen}
        options={{title: 'User authorization'}}
      />
      <WelcomingStack.Screen
        name="Log In With Phone"
        component={LogInWithPhoneScreen}
      />
      <WelcomingStack.Screen name="Sigh In" component={SighInScreen} />
      <WelcomingStack.Screen
        name="Verify Phone Number"
        component={VerifyPhoneNumberScreen}
      />
      <WelcomingStack.Screen name="Location" component={LocationScreen} />
    </WelcomingStack.Navigator>
  );
}
