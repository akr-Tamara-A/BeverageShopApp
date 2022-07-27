import React from 'react';
import {Text, StyleSheet} from 'react-native';

const SmallText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'QuattrocentoSans-Regular',
    fontWeight: 'normal',
    fontSize: 14,
  },
});

export default SmallText;
