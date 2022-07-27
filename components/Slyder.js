import * as React from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';
import MainButton from './buttons/MainButton';
import SlyderItem from './SlyderItem';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

function Slyder({data}) {
  const navigation = useNavigation();
  const ref = React.useRef(null);
  const [flatlistIndex, setFlatlistIndex] = React.useState(0);
  const [isLastPage, setislastPage] = React.useState(false);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index: flatlistIndex,
      animated: true,
    });
  }, [flatlistIndex]);

  /** */
  function handleNextSlide() {
    if (flatlistIndex === data.length - 1) {
      return;
    }
    setFlatlistIndex(flatlistIndex + 1);
  }

  /** */
  function handleNavigate() {
    navigation.replace('Log In');
  }

  /** */
  function handleOnSliderEnd() {
    setislastPage(true);
  }

  /** */
  function handleOnMomentumScrollEnd(e) {
    let pageNumber = Math.min(
      Math.max(
        Math.floor(e.nativeEvent.contentOffset.x / windowWidth + 0.5) + 1,
        0,
      ),
      data.length,
    );
    setFlatlistIndex(pageNumber - 1);
  }

  /** */
  return (
    <View>
      <Animated.FlatList
        ref={ref}
        initialScrollIndex={flatlistIndex}
        data={data}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => (
          <SlyderItem {...item} isCurrent={index === flatlistIndex} />
        )}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: windowWidth,
          offset: (windowWidth - 30) * index,
          index,
        })}
        onEndReached={handleOnSliderEnd}
        onMomentumScrollEnd={handleOnMomentumScrollEnd}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
      />
      <View style={styles.button}>
        <MainButton
          title={isLastPage ? 'Log in' : 'Next'}
          onPress={isLastPage ? handleNavigate : handleNextSlide}
        />
      </View>
    </View>
  );
}

export default Slyder;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: windowWidth / 2,
    bottom: 60,
    alignSelf: 'center',
  },
});
