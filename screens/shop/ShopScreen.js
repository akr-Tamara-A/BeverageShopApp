import React, {useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ScreenView from '../../components/Screen';
import BoldText from '../../components/text/BoldText';
import {COLORS} from '../../styles/defaultColors';
import {IconSearch} from '../../components/icons/UIIcons';
import {getCategories, selectCategory} from '../../features/shop/shopSlice';

const SPACING = 10;
const windowWidth = Dimensions.get('window').width;
const CATEGORYIMAGEWIDTH = windowWidth / 3 - SPACING * 1.5;

/** */
function ShopScreen({navigation}) {
  const categories = useSelector(getCategories);
  const dispatch = useDispatch();

  /** */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <IconSearch fill={COLORS.secondaryLight} width={30} height={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  /** */
  return (
    <ScreenView style={styles.screen}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.categoriesContainer}>
            {categories.map((item, index) => {
              return (
                <View key={item.title} style={styles.item}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(selectCategory(item.title));
                      navigation.navigate('Category', {
                        categoryTitle: item.title,
                      });
                    }}>
                    <Image
                      source={item.iconUrl}
                      resizeMode="cover"
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <View style={styles.label}>
                    <BoldText textColor="light">{item.title}</BoldText>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
}

export default ShopScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    width: windowWidth - SPACING * 2,
  },
  categoriesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SPACING / 2,
  },
  image: {
    width: CATEGORYIMAGEWIDTH,
    height: CATEGORYIMAGEWIDTH,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: CATEGORYIMAGEWIDTH,
    backgroundColor: COLORS.primaryDark,
    padding: SPACING / 2,
    alignItems: 'center',
  },
});
