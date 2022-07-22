import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function LocationScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Location Screen</TitleText>
      <Button title="Go to Tabs" onPress={() => navigation.navigate('App')} />
    </View>
  );
}

export default LocationScreen;
