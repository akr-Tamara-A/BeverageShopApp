import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function OrderDetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Order Details Screen</TitleText>
      <Button
        title="Go to Track Order"
        onPress={() => navigation.navigate('Track Order')}
      />
    </View>
  );
}

export default OrderDetailsScreen;
