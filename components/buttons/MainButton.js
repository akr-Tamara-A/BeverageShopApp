import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';
import BoldText from '../text/BoldText';

const MainButton = ({title, onPress, disabled}) => {
  const styles = StyleSheet.create({
    button: {
      borderColor: disabled ? COLORS.background : COLORS.primaryDark,
      borderWidth: 5,
      backgroundColor: disabled ? COLORS.background : COLORS.primaryDark,
      paddingHorizontal: 50,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      borderRadius: 2,
    },
    text: {
      color: COLORS.primaryLight,
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

export default MainButton;
