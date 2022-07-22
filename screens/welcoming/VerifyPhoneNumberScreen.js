import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function VerifyPhoneNumberScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Verify Phone Number Screen</TitleText>
      <Button
        title="Go to Location"
        onPress={() => navigation.navigate('Location')}
      />
    </View>
  );
}

export default VerifyPhoneNumberScreen;
