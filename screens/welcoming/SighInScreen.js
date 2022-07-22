import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function SighInScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Sigh In Screen</TitleText>
      <Button
        title="Go to App"
        onPress={() => navigation.navigate('Sigh In')}
      />
    </View>
  );
}

export default SighInScreen;
