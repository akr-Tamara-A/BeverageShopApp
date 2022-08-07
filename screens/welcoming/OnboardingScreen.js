import React, {useLayoutEffect} from 'react';
import ScreenView from '../../components/Screen';
import Slyder from '../../components/Slyder';

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
  useLayoutEffect(() => {
    navigation.setOptions({
      title: onboardingData[0].heading,
    });
  }, [navigation]);

  return (
    <ScreenView>
      <Slyder data={onboardingData} />
    </ScreenView>
  );
}
export default OnboardingScreen;
