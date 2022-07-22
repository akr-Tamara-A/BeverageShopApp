import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function CocktailItemScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Cocktail Item Screen</TitleText>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
}

export default CocktailItemScreen;
