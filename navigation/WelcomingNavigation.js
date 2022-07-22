import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/welcoming/OnboardingScreen';
import LogInScreen from '../screens/welcoming/LogInScreen';
import LogInWithPhoneScreen from '../screens/welcoming/LogInWithPhoneScreen';
import SighInScreen from '../screens/welcoming/SighInScreen';
import VerifyPhoneNumberScreen from '../screens/welcoming/VerifyPhoneNumberScreen';
import LocationScreen from '../screens/welcoming/LocationScreen';

const WelcomingStack = createNativeStackNavigator();

export default function WelcomingNavigation() {
  return (
    <WelcomingStack.Navigator>
      <WelcomingStack.Screen name="Onboarding" component={OnboardingScreen} />
      <WelcomingStack.Screen name="Log In" component={LogInScreen} />
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
