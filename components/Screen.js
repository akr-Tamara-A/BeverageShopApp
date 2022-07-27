import * as React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {COLORS} from '../styles/defaultColors';

const ScreenView = ({children, style}) => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      backgroundColor: COLORS.background,
      ...style,
    },
  });
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default ScreenView;
