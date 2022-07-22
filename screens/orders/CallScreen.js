import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function CallScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Call Screen</TitleText>
      <Button title="Go to Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}

export default CallScreen;
