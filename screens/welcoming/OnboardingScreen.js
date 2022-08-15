import React, {useState, useLayoutEffect} from 'react';
import ScreenView from '../../components/Screen';
import Splashscreen from '../../components/SplashScreen';
import Slyder from '../../components/Slyder';
import {COLORS} from '../../styles/defaultColors';
import {View} from 'react-native';

const onboardingData = [
  {
    imageUrl: require('../../assets/images/cocktail-sm.jpg'),
    heading: 'Find ingredients for cocktail',
    key: 'first',
  },
  {
    imageUrl: require('../../assets/images/wine-sm.jpg'),
    heading: 'Order some wine or beer',
    key: 'second',
  },
  {
    imageUrl: require('../../assets/images/store-sm.jpg'),
    heading: 'Or drop by in one of our stores',
    key: 'third',
  },
];

function OnboardingScreen({navigation}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: onboardingData[0].heading,
    });
  }, [navigation, isLoaded]);

  function handleOnEnd(bool) {
    if (bool) {
      setIsLoaded(true);
    }
  }

  return (
    <ScreenView>
      {isLoaded ? (
        <Slyder data={onboardingData} />
      ) : (
        <Splashscreen onEnd={handleOnEnd} />
      )}
    </ScreenView>
  );
}
export default OnboardingScreen;
