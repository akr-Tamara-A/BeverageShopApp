import * as React from 'react';
import {View, StyleSheet, Dimensions, Animated, Easing} from 'react-native';
import {COLORS} from '../styles/defaultColors';
import TitleBoldText from './text/TitleBoldText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ITEM_WIDTH = windowWidth - 30;

function SlyderItem({imageUrl, heading, isCurrent}) {
  const animatedOpacityImageBG = React.useRef(new Animated.Value(0)).current;
  const animatedOpacityImage = React.useRef(new Animated.Value(0)).current;
  const animatedOpacityTextBg = React.useRef(new Animated.Value(0)).current;
  const animatedOpacityText = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isCurrent) {
      animate().start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrent]);

  function animate() {
    const animations = [
      Animated.timing(animatedOpacityImageBG, {
        duration: 600,
        useNativeDriver: false,
        toValue: 1,
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      }),
      Animated.timing(animatedOpacityImage, {
        duration: 800,
        useNativeDriver: false,
        toValue: 1,
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      }),
      Animated.timing(animatedOpacityTextBg, {
        duration: 600,
        useNativeDriver: false,
        toValue: 1,
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      }),
      Animated.timing(animatedOpacityText, {
        duration: 800,
        useNativeDriver: false,
        toValue: 1,
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      }),
    ];
    return Animated.sequence(animations);
  }

  return (
    <View style={styles.item}>
      <Animated.View
        style={[styles.imageWrapper, {opacity: animatedOpacityImageBG}]}>
        <Animated.Image
          style={[styles.image, {opacity: animatedOpacityImage}]}
          source={imageUrl}
        />
      </Animated.View>
      <Animated.View style={[styles.heading, {opacity: animatedOpacityTextBg}]}>
        <Animated.View style={[styles.text, {opacity: animatedOpacityText}]}>
          <TitleBoldText textColor="light">{heading}</TitleBoldText>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

export default SlyderItem;

const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
  },
  heading: {
    position: 'absolute',
    top: 30,
    left: 30,
    width: windowWidth - 90,
    zIndex: 10,
    backgroundColor: COLORS.color5,
  },
  imageWrapper: {
    padding: 20,
    backgroundColor: COLORS.color0,
  },
  image: {
    height: windowHeight / 2,
    width: windowWidth - 70,
    resizeMode: 'cover',
  },
  text: {
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginBottom: 5,
  },
});
