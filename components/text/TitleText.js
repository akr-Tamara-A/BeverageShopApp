import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TitleText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'QuattrocentoSans-Regular',
    fontWeight: 'normal',
    fontSize: 28,
  },
});

export default TitleText;
