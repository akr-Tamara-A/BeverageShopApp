import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function CategoriesScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Main Categories Screen</TitleText>
      <Button
        title="Go to SubCategories"
        onPress={() => navigation.navigate('SubCategories')}
      />
    </View>
  );
}

export default CategoriesScreen;
