import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function LogInWithPhoneScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Log In With Phone Screen</TitleText>
      <Button
        title="Go to Verify Phone Number"
        onPress={() => navigation.navigate('Verify Phone Number')}
      />
    </View>
  );
}

export default LogInWithPhoneScreen;
