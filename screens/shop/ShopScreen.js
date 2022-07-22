import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function ShopScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Shop Screen</TitleText>
      <Button
        title="Go to Categories"
        onPress={() => navigation.navigate('Categories')}
      />
    </View>
  );
}

export default ShopScreen;
