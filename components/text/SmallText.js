import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';

const SmallText = ({children, style, textColor}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'QuattrocentoSans-Regular',
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 20,
      color: textColor === 'light' ? COLORS.primaryLight : COLORS.primaryDark,
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default SmallText;
