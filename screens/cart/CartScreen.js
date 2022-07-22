import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function CartScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Cart Screen</TitleText>
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
}

export default CartScreen;
