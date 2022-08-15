import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Easing,
  Text,
} from 'react-native';
import {COLORS} from '../styles/defaultColors';
import icon from '../assets/icons/beverage.png';
import {useHeaderHeight} from '@react-navigation/elements';

const {width, height} = Dimensions.get('window');

const INTERVAL = 300;
const LINE_HEIGHT = 20;
const MARGIN = 30;
const TOP = height / 8;
const ICON_SIZE = 200;

function Splashscreen({onEnd}) {
  const translateX1 = useRef(new Animated.Value(-width)).current;
  const translateX2 = useRef(new Animated.Value(-width)).current;
  const translateX3 = useRef(new Animated.Value(-width)).current;
  const translateX4 = useRef(new Animated.Value(-width)).current;
  const scaleLogo = useRef(new Animated.Value(0.7)).current;
  const opacityIcon = useRef(new Animated.Value(0)).current;
  const opacityTitle1 = useRef(new Animated.Value(0)).current;
  const opacityTitle2 = useRef(new Animated.Value(0)).current;
  const opacityOverlay = useRef(new Animated.Value(0)).current;
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    setTimeout(() => {
      animate().start(({finished}) => onEnd(true));
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function animate() {
    const animations = [
      Animated.timing(translateX1, {
        toValue: width,
        easing: Easing.linear(),
        duration: INTERVAL * 4,
        useNativeDriver: true,
      }),
      Animated.timing(translateX2, {
        toValue: width,
        easing: Easing.linear(),
        duration: INTERVAL * 4,
        useNativeDriver: true,
        delay: INTERVAL,
      }),
      Animated.timing(translateX3, {
        toValue: width,
        easing: Easing.linear(),
        duration: INTERVAL * 4,
        useNativeDriver: true,
        delay: INTERVAL * 2,
      }),
      Animated.timing(translateX4, {
        toValue: width,
        easing: Easing.linear(),
        duration: INTERVAL * 4,
        useNativeDriver: true,
        delay: INTERVAL * 3,
      }),
      Animated.timing(scaleLogo, {
        toValue: 1,
        easing: Easing.linear(),
        duration: INTERVAL * 6,
        useNativeDriver: true,
        delay: INTERVAL * 4,
      }),
      Animated.timing(opacityIcon, {
        toValue: 1,
        easing: Easing.linear(),
        duration: INTERVAL * 3,
        useNativeDriver: true,
        delay: INTERVAL * 4,
      }),
      Animated.timing(opacityTitle1, {
        toValue: 1,
        easing: Easing.linear(),
        duration: INTERVAL * 3,
        useNativeDriver: true,
        delay: INTERVAL * 5,
      }),
      Animated.timing(opacityTitle2, {
        toValue: 1,
        easing: Easing.linear(),
        duration: INTERVAL * 3,
        useNativeDriver: true,
        delay: INTERVAL * 6,
      }),
      Animated.timing(opacityOverlay, {
        toValue: 1,
        easing: Easing.linear(),
        duration: INTERVAL * 1,
        useNativeDriver: true,
        delay: INTERVAL * 14,
      }),
    ];
    return Animated.parallel(animations);
  }

  return (
    <View style={[styles.splashScreen, {top: -headerHeight}]}>
      <Animated.View
        style={[
          styles.line,
          {
            top: TOP + MARGIN + LINE_HEIGHT,
            transform: [{translateX: translateX1}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.line,
          {
            top: TOP + MARGIN * 3 + LINE_HEIGHT,
            transform: [{translateX: translateX2}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.line,
          {
            top: TOP + MARGIN * 5 + LINE_HEIGHT,
            transform: [{translateX: translateX3}],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.line,
          {
            top: TOP + MARGIN * 7 + LINE_HEIGHT,
            transform: [{translateX: translateX4}],
          },
        ]}
      />
      <Animated.View style={[styles.logo, {transform: [{scale: scaleLogo}]}]}>
        <Animated.Image
          source={icon}
          style={[styles.icon, {opacity: opacityIcon}]}
        />
        <Animated.View style={{opacity: opacityTitle1}}>
          <Text style={styles.title} textColor="light">
            Saloon
          </Text>
        </Animated.View>
        <Animated.View style={{opacity: opacityTitle2}}>
          <Text style={styles.title}>shop</Text>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: opacityOverlay,
          },
        ]}
      />
    </View>
  );
}

export default Splashscreen;

const styles = StyleSheet.create({
  splashScreen: {
    position: 'absolute',
    // top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    zIndex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  line: {
    width,
    height: LINE_HEIGHT,
    backgroundColor: COLORS.secondaryLight,
    marginVertical: MARGIN,
    position: 'absolute',
    left: 0,
  },
  logo: {
    alignItems: 'center',
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain',
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Quattrocento-Regular',
    fontWeight: 'bold',
    fontSize: 48,
    lineHeight: 56,
    letterSpacing: 6,
    color: COLORS.color0,
  },
});
