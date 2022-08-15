import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';

const TitleBoldText = ({children, style, textColor}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Quattrocento-Regular',
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 32,
      color: textColor === 'light' ? COLORS.primaryLight : COLORS.primaryDark,
    },
  });

  return (
    <Text>
      <Text style={[styles.text, style]}>{children}</Text>
    </Text>
  );
};
export default TitleBoldText;
