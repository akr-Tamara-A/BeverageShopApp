import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function OrdersScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Orders Screen</TitleText>
      <Button
        title="Go to Order Details"
        onPress={() => navigation.navigate('Order Details')}
      />
    </View>
  );
}

export default OrdersScreen;
