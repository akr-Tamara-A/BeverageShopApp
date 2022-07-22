import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function ChatScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Chat Screen</TitleText>
      <Button
        title="Go to Feedback"
        onPress={() => navigation.navigate('Feedback')}
      />
    </View>
  );
}

export default ChatScreen;
