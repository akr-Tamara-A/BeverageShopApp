import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';

const NormalText = ({children, style, textColor}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'QuattrocentoSans-Regular',
      fontWeight: 'normal',
      fontSize: 16,
      color: textColor === 'light' ? COLORS.color9 : COLORS.color8,
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default NormalText;
