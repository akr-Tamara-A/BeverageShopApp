import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function CoctailsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Coctails Screen</TitleText>
      <Button
        title="Go to Main Categories"
        onPress={() => navigation.navigate('Main Categories')}
      />
    </View>
  );
}

export default CoctailsScreen;
