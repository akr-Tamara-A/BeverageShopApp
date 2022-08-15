import * as React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../styles/defaultColors';
import SmallText from '../text/SmallText';

const IconButton = ({icon, label, onPress}) => {
  const styles = StyleSheet.create({
    button: {
      padding: 10,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
      backgroundColor: COLORS.accent,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    icon: {
      width: 30,
      height: 30,
    },
    label: {
      color: COLORS.primaryLight,
      textTransform: 'uppercase',
      marginTop: 15,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.icon} source={icon} />
      {!!label && <SmallText style={styles.label}>{label}</SmallText>}
    </TouchableOpacity>
  );
};

export default IconButton;
