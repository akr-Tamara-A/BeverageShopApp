import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BoldText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'QuattrocentoSans-Bold',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BoldText;
