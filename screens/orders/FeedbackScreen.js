import * as React from 'react';
import {View} from 'react-native';
import TitleText from '../../components/text/TitleText';

function FeedbackScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Feedback Screen</TitleText>
    </View>
  );
}

export default FeedbackScreen;
