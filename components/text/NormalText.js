import React from 'react';
import {Text, StyleSheet} from 'react-native';

const NormalText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'QuattrocentoSans-Regular',
    fontWeight: 'normal',
    fontSize: 16,
  },
});

export default NormalText;
