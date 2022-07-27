import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../styles/defaultColors';
import BoldText from '../text/BoldText';

const MainButton = ({title, onPress}) => {
  const styles = StyleSheet.create({
    button: {
      // minWidth: '75%',
      backgroundColor: COLORS.color8,
      paddingHorizontal: 50,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    text: {
      color: COLORS.color9,
      textTransform: 'uppercase',
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <BoldText style={styles.text}>{title}</BoldText>
    </TouchableOpacity>
  );
};

export default MainButton;
