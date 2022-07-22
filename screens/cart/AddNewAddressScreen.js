import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function AddNewAddressScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Add New Address Screen</TitleText>
    </View>
  );
}

export default AddNewAddressScreen;
