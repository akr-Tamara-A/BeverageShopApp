import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function CheckoutScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Checkout Screen</TitleText>
      <Button
        title="Go to Add New Address"
        onPress={() => navigation.navigate('Add New Address')}
      />
    </View>
  );
}

export default CheckoutScreen;
