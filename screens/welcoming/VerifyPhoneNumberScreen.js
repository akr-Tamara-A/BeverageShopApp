import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import TitleBoldText from '../../components/text/TitleBoldText';
import SmallText from '../../components/text/SmallText';
import NormalText from '../../components/text/NormalText';
import ScreenView from '../../components/Screen';
import {IconMessage} from '../../components/icons/UXIcons';
import {COLORS} from '../../styles/defaultColors';
import MainButton from '../../components/buttons/MainButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import StyledInput from '../../components/StyledInput';

const phoneNumber = '(000)000-0000';
const SPACING = 10;

function VerifyPhoneNumberScreen({navigation}) {
  const inputsRef = [useRef(), useRef(), useRef(), useRef()];

  const [code, setCode] = useState([]);
  const [disabled, setDisabled] = useState(true);

  /** */
  function handleChange(value, index) {
    setCode(prev => {
      const newCode = [...prev];
      if (newCode.length === index) {
        newCode.push(value);
      } else {
        newCode[index] = value;
      }
      return newCode;
    });
    inputsRef[index].blur();
    inputsRef[index + 1].focus();
  }

  /** */
  function handleLast(value) {
    setCode(prev => {
      const newCode = [...prev];
      if (newCode.length === 3) {
        newCode.push(value);
      } else {
        newCode[3] = value;
      }
      return newCode;
    });
    inputsRef[3].blur();
    setDisabled(false);
  }

  /** */
  return (
    <ScreenView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.screen}>
        <View style={styles.info}>
          <View style={styles.icon}>
            <IconMessage fill={COLORS.primaryDark} />
          </View>
          <View style={styles.title}>
            <TitleBoldText textColor="light">
              Verify your phone number
            </TitleBoldText>
          </View>
          <SmallText textColor="light">
            Enter 4-digit code sent to your mobile number
          </SmallText>
          <SmallText textColor="light">{phoneNumber}</SmallText>
        </View>
        <View style={styles.inputsConteiner}>
          {inputsRef.map((_, index) => {
            return (
              <View style={styles.input} key={index}>
                <StyledInput
                  ref={r => (inputsRef[index] = r)}
                  maxLength={1}
                  keyboardType="numeric"
                  value={code && code[index]}
                  onChangeText={value => {
                    index < 3 ? handleChange(value, index) : handleLast(value);
                  }}
                />
              </View>
            );
          })}
        </View>
        <MainButton
          title="Continue"
          disabled={disabled}
          onPress={() => !disabled && navigation.navigate('App')}
        />
        <View style={styles.bottomBlock}>
          <NormalText textColor="light">Code not received?</NormalText>
          <NormalText textColor="light">
            Check your phone number and try again
          </NormalText>
          <SecondaryButton
            title="Try again"
            onPress={() => navigation.navigate('Log In With Phone')}
          />
        </View>
      </View>
    </ScreenView>
  );
}

export default VerifyPhoneNumberScreen;

const styles = StyleSheet.create({
  screen: {
    height: '80%',
    width: '80%',
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.secondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: SPACING * 2,
  },
  info: {
    marginBottom: SPACING * 2,
  },
  title: {
    marginBottom: SPACING,
  },
  inputsConteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    marginHorizontal: SPACING,
  },
  bottomBlock: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
