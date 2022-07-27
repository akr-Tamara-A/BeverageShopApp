import * as React from 'react';
import {StyleSheet} from 'react-native';
import ScreenView from '../../components/Screen';
import Slyder from '../../components/Slyder';

function OnboardingScreen({navigation}) {
  const onboardingData = [
    {
      imageUrl: require('../../assets/images/cocktail-sm.jpg'),
      heading: 'Find the ingredients for your favorite cocktail...',
      key: 'first',
    },
    {
      imageUrl: require('../../assets/images/wine-sm.jpg'),
      heading: 'Order some wine or beer with fast delivery...',
      key: 'second',
    },
    {
      imageUrl: require('../../assets/images/store-sm.jpg'),
      heading: 'Or drop by in one of our stores',
      key: 'third',
    },
  ];

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
  });

  return (
    <ScreenView style={styles.screen}>
      <Slyder data={onboardingData} />
    </ScreenView>
  );
}

export default OnboardingScreen;
