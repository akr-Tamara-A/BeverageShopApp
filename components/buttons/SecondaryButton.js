import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';
import BoldText from '../text/BoldText';

const SecondaryButton = ({title, onPress, disabled}) => {
  const styles = StyleSheet.create({
    button: {
      borderColor: COLORS.color7,
      backgroundColor: COLORS.background,
      borderWidth: 5,
      paddingHorizontal: 50,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      borderRadius: 3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    text: {
      color: COLORS.color9,
      textTransform: 'uppercase',
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}>
      <BoldText style={styles.text}>{title}</BoldText>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
