import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function SubCategoriesScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>SubCategories Screen</TitleText>
      <Button
        title="Go to Category"
        onPress={() => navigation.navigate('Category')}
      />
    </View>
  );
}

export default SubCategoriesScreen;
