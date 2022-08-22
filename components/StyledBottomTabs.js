import React, {useRef, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {COLORS} from '../styles/defaultColors';
import BoldText from '../components/text/BoldText';
import {tabsData} from '../navigation/TabNavigation';

/** */
function StyledBottomTabs({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        return (
          <StyledTab
            key={index}
            route={route}
            options={options}
            isFocused={isFocused}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
}

/** */
function StyledTab({route, options, isFocused, navigation}) {
  const labelOpacityAnim = useRef(new Animated.Value(0)).current;
  const labelTranslateAnim = useRef(new Animated.Value(10)).current;
  const iconShrinkAnim = useRef(new Animated.Value(1)).current;
  const iconTranslateAnim = useRef(new Animated.Value(8)).current;

  /** */
  useEffect(() => {
    !isFocused && labelOpacity(0);
    !isFocused && labelTranslate(10);
    !isFocused && iconShrink(1);
    !isFocused && iconTranslate(8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  /** */
  const labelOpacity = (toValue = 0) => {
    Animated.timing(labelOpacityAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  /** */
  const labelTranslate = (toValue = 0) => {
    Animated.timing(labelTranslateAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  /** */
  const iconShrink = (toValue = 0.8) => {
    Animated.timing(iconShrinkAnim, {
      toValue,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  /** */
  const iconTranslate = (toValue = 0) => {
    Animated.timing(iconTranslateAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  /** */
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    labelOpacity(1);
    labelTranslate(0);
    iconShrink(0.8);
    iconTranslate(0);

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({name: route.name, merge: true});
    }
  };

  /** */
  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const tabs = tabsData(isFocused ? COLORS.primaryLight : COLORS.accent);

  /** */
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{flex: 1}}>
      <View style={styles.tab}>
        <Animated.View
          style={{
            transform: [
              {scale: iconShrinkAnim},
              {translateY: iconTranslateAnim},
            ],
          }}>
          {tabs[route.name].icon}
        </Animated.View>
        {isFocused && (
          <Animated.View
            style={[
              styles.label,
              {
                opacity: labelOpacityAnim,
                transform: [{translateY: labelTranslateAnim}],
              },
            ]}>
            <BoldText textColor="light">{tabs[route.name].label}</BoldText>
          </Animated.View>
        )}
      </View>
    </TouchableOpacity>
  );
}

/** */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.background,
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default StyledBottomTabs;
