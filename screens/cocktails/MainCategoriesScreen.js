import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function MainCategoriesScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Main Categories Screen</TitleText>
      <Button
        title="Go to Sub Categories"
        onPress={() => navigation.navigate('Sub Categories')}
      />
    </View>
  );
}

export default MainCategoriesScreen;
