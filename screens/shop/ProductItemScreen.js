import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function ProductItemScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Product Item Screen</TitleText>
      <Button
        title="Go to Offer"
        onPress={() => navigation.navigate('Offer')}
      />
    </View>
  );
}

export default ProductItemScreen;
