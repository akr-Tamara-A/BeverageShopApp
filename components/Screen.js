import * as React from 'react';
import {SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import {COLORS} from '../styles/defaultColors';
import icon from '../assets/background/1-blured.jpg';
import {useHeaderHeight} from '@react-navigation/elements';

const ScreenView = ({children, style}) => {
  const headerHeight = useHeaderHeight();

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: headerHeight,
      paddingBottom: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      backgroundColor: COLORS.background,
      ...style,
    },
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={icon} style={styles.screen}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenView;
