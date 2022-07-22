import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function LogInWithPhoneScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Log In Screen</TitleText>
      <Button
        title="Go to Log In With Phone"
        onPress={() => navigation.navigate('Log In With Phone')}
      />
    </View>
  );
}

export default LogInWithPhoneScreen;
