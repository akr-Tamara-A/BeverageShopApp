import React, {useState} from 'react';
import Splashscreen from '../../components/SplashScreen';
import Slyder from '../../components/Slyder';
import {View} from 'react-native';

const onboardingData = [
  {
    imageUrl: require('../../assets/images/cocktail-base.jpg'),
    heading: 'Find ingredients for your favorite cocktail',
    key: 'first',
  },
  {
    imageUrl: require('../../assets/images/wine-base.jpg'),
    heading: 'Order some wine or beer for dinner',
    key: 'second',
  },
  {
    imageUrl: require('../../assets/images/store-base.jpg'),
    heading: 'Or just drop by in one of our stores',
    key: 'third',
  },
];

function OnboardingScreen({navigation}) {
  const [isLoaded, setIsLoaded] = useState(false);

  function handleOnEnd(bool) {
    if (bool) {
      setIsLoaded(true);
    }
  }

  return (
    <View style={{flex: 1}}>
      {isLoaded ? (
        <Slyder data={onboardingData} />
      ) : (
        <Splashscreen onEnd={handleOnEnd} />
      )}
    </View>
  );
}
export default OnboardingScreen;
