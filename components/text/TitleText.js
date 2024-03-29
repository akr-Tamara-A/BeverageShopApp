import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';

const TitleText = ({children, style, textColor}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Quattrocento-Regular',
      fontWeight: 'normal',
      fontSize: 24,
      color: textColor === 'light' ? COLORS.primaryLight : COLORS.primaryDark,
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default TitleText;
