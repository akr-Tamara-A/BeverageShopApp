import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function CategoryScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Category Screen</TitleText>
      <Button
        title="Go to Recent Purchases"
        onPress={() => navigation.navigate('Recent Purchases')}
      />
    </View>
  );
}

export default CategoryScreen;
