import * as React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../styles/defaultColors';
import SmallText from '../text/SmallText';

const SvgButton = ({children, label, background, onPress}) => {
  const styles = StyleSheet.create({
    button: {
      padding: 10,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
      backgroundColor: background ? COLORS.color7 : 'transparent',
    },
    shadow: {
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
      color: COLORS.color5,
      textTransform: 'uppercase',
      marginTop: 15,
    },
  });

  return (
    <TouchableOpacity
      style={background ? [styles.button, styles.shadow] : [styles.button]}
      onPress={onPress}>
      {children}
      {!!label && <SmallText style={styles.label}>{label}</SmallText>}
    </TouchableOpacity>
  );
};

export default SvgButton;
