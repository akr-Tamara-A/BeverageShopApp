import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions, Animated, Image} from 'react-native';
import MainButton from './buttons/MainButton';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../styles/defaultColors';
import TitleBoldText from './text/TitleBoldText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Slyder({data}) {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  /** */
  function handleNavigate() {
    navigation.replace('Log In');
  }

  /** */
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => {
          const translateX = scrollX.interpolate({
            inputRange: [
              (index - 1) * windowWidth,
              index * windowWidth,
              (index + 1) * windowWidth,
            ],
            outputRange: [-windowWidth, 0, windowWidth],
          });
          return (
            <View style={styles.item}>
              <Animated.View style={{transform: [{translateX}]}}>
                <Image style={[styles.image]} source={item.imageUrl} />
              </Animated.View>
              <Animated.View
                style={[styles.textContainer, {transform: [{translateX}]}]}>
                <TitleBoldText textColor="light">{item.heading}</TitleBoldText>
              </Animated.View>
            </View>
          );
        }}
        horizontal
        pagingEnabled
        bounces={false}
        scrollEventThrottle={24}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
      />
      <Animated.FlatList
        data={data}
        style={styles.indicatorsContainer}
        contentContainerStyle={{justifyContent: 'center'}}
        keyExtractor={item => item.key}
        horizontal
        pagingEnabled
        bounces={false}
        scrollEventThrottle={24}
        showsHorizontalScrollIndicator={false}
        renderItem={({_, index}) => {
          const scale = scrollX.interpolate({
            inputRange: [
              (index - 1) * windowWidth,
              index * windowWidth,
              (index + 1) * windowWidth,
            ],
            outputRange: [0.7, 1, 0.7],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View style={[styles.indicator, {transform: [{scale}]}]} />
          );
        }}
      />
      <View style={styles.button}>
        <MainButton title="Log in" onPress={handleNavigate} />
      </View>
    </View>
  );
}

export default Slyder;

/** */
const styles = StyleSheet.create({
  indicatorsContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    zIndex: 40,
  },
  indicator: {
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: COLORS.primaryLight,
    marginHorizontal: 10,
  },
  button: {
    position: 'absolute',
    width: windowWidth / 2,
    bottom: 80,
    alignSelf: 'center',
  },
  item: {
    backgroundColor: COLORS.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    height: windowHeight,
    width: windowWidth,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: 100,
    height: 100,
    width: windowWidth,
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: COLORS.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
