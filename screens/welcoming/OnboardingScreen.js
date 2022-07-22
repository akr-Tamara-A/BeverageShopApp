import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function OnboardingScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <TitleText>Onboarding Screen</TitleText>
        <Button
          title="Go to Log in"
          onPress={() => navigation.navigate('Log In')}
        />
      </View>
    </View>
  );
}

export default OnboardingScreen;
