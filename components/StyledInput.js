import React, {forwardRef} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {COLORS} from '../styles/defaultColors';
import SmallText from './text/SmallText';
import BoldText from './text/BoldText';

const SPACING = 10;

const StyledInput = forwardRef(
  (
    {
      keyboardType,
      value,
      onChangeText,
      label,
      info,
      secureTextEntry,
      placeholder,
      icon,
      iconPosition,
      button,
      buttonPosition,
      buttonIcon,
      buttonIconSrc,
      buttonOnPress,
      maxLength,
      minLength,
    },
    ref,
  ) => {
    const styles = StyleSheet.create({
      label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      input: {
        marginBottom: SPACING,
        backgroundColor: COLORS.secondaryLight,
        borderRadius: 10,
        paddingVertical: SPACING,
        paddingLeft:
          iconPosition === 'left' || buttonPosition === 'left'
            ? SPACING * 5
            : SPACING * 2,
        paddingRight:
          iconPosition === 'right' || buttonPosition === 'right'
            ? SPACING * 5
            : SPACING * 2,
        fontSize: 20,
      },
      inputIcon: {
        position: 'absolute',
        top: 8,
        left: iconPosition === 'left' || buttonPosition === 'left' ? 8 : null,
        right:
          iconPosition === 'right' || buttonPosition === 'right' ? 8 : null,
        zIndex: 5,
      },
      image: {
        width: 34,
        height: 34,
      },
    });

    return (
      <View>
        {label && (
          <View style={styles.label}>
            <BoldText textColor="light">{label}</BoldText>
            <SmallText textColor="light">{info}</SmallText>
          </View>
        )}
        <View>
          {icon && <View style={styles.inputIcon}>{icon}</View>}
          <TextInput
            ref={ref}
            style={styles.input}
            keyboardType={keyboardType}
            placeholder={placeholder && placeholder}
            placeholderTextColor={placeholder && COLORS.backgroundTransparent}
            secureTextEntry={secureTextEntry && secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            maxLength={maxLength}
            minLength={minLength}
          />
          {button && (
            <View style={styles.inputIcon}>
              <TouchableWithoutFeedback onPress={buttonOnPress}>
                {buttonIcon ? (
                  buttonIcon
                ) : (
                  <Image source={buttonIconSrc} style={styles.image} />
                )}
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>
      </View>
    );
  },
);

export default StyledInput;
