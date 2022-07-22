import * as React from 'react';
import {View} from 'react-native';
import TitleText from '../../components/text/TitleText';

function SearchScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Search Screen</TitleText>
    </View>
  );
}

export default SearchScreen;
