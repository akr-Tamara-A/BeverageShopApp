import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function RecentPurchasesScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Recent Purchases Screen</TitleText>
      <Button
        title="Go to Product Item"
        onPress={() => navigation.navigate('Product Item')}
      />
    </View>
  );
}

export default RecentPurchasesScreen;
