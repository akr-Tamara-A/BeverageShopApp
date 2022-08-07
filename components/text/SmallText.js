import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';

const SmallText = ({children, style, textColor}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'QuattrocentoSans-Regular',
      fontWeight: 'normal',
      fontSize: 14,
      color: textColor === 'light' ? COLORS.color9 : COLORS.color8,
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default SmallText;
