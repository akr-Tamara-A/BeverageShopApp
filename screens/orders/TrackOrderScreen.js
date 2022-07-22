import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function TrackOrderScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Track Order Screen</TitleText>
      <Button title="Go to Call" onPress={() => navigation.navigate('Call')} />
    </View>
  );
}

export default TrackOrderScreen;
