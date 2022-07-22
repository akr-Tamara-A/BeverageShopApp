import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function AddPaymentScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Add Payment Screen</TitleText>
      <Button
        title="Go to Add Payment"
        onPress={() => navigation.navigate('Add Payment')}
      />
    </View>
  );
}

export default AddPaymentScreen;
