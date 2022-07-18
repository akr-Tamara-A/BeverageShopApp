import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BoldText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Quattrocento-Bold',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BoldText;
