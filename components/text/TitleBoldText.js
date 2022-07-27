import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {COLORS} from '../../styles/defaultColors';

const TitleBoldText = ({children, textColor}) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Quattrocento-Regular',
      fontWeight: 'normal',
      fontSize: 24,
      lineHeight: 32,
      color: textColor === 'light' ? COLORS.color9 : COLORS.color8,
    },
  });

  return (
    <Text>
      <Text style={styles.text}>{children}</Text>
    </Text>
  );
};
export default TitleBoldText;
