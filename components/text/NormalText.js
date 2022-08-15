import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';

const NormalText = ({children, style, textColor}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'QuattrocentoSans-Regular',
      fontWeight: 'normal',
      fontSize: 16,
      color: textColor === 'light' ? COLORS.primaryLight : COLORS.primaryDark,
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default NormalText;
