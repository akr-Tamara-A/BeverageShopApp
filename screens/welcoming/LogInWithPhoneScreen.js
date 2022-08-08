import * as React from 'react';
import {Animated, StyleSheet, View, Easing, TextInput} from 'react-native';
import ScreenView from '../../components/Screen';
import SmallText from '../../components/text/SmallText';
import TitleBoldText from '../../components/text/TitleBoldText';
import MainButton from '../../components/buttons/MainButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import IconButton from '../../components/buttons/IconButton';
import {COLORS} from '../../styles/defaultColors';
import {IconCall} from '../../components/icons/UXIcons';

const SPACING = 10;

function LogInWithPhoneScreen({navigation}) {
  const [mobileNumber, onChangeMobileNumber] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    const state = mobileNumber.length < 14;
    setDisabled(state);
  }, [mobileNumber]);

  /** */
  function phoneStyling(phone) {
    const value = phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    const styledPhone = !value[2]
      ? value[1]
      : '(' + value[1] + ') ' + value[2] + (value[3] ? '-' + value[3] : '');
    onChangeMobileNumber(styledPhone);
  }
  /** */
  return (
    <ScreenView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.screen}>
        <View style={styles.info}>
          <View style={styles.icon}>
            <IconCall />
          </View>
          <View style={styles.title}>
            <TitleBoldText textColor="light">
              What`s your phone number?
            </TitleBoldText>
          </View>
          <SmallText textColor="light">
            We`ll check if you have an account
          </SmallText>
        </View>
        <View>
          <View style={styles.inputIcon}>
            <IconCall fill={COLORS.color5} height={30} width={30} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="(555) 555-5555"
            placeholderTextColor={COLORS.color5}
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={phoneStyling}
          />
        </View>
        <MainButton
          title="Continue"
          disabled={disabled}
          onPress={() =>
            !disabled && navigation.navigate('Verify Phone Number')
          }
        />
      </View>
    </ScreenView>
  );
}

export default LogInWithPhoneScreen;

const styles = StyleSheet.create({
  screen: {
    height: '80%',
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.color10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: SPACING * 2,
  },
  info: {
    marginBottom: SPACING * 4,
  },
  title: {
    marginBottom: SPACING,
  },
  input: {
    marginBottom: SPACING * 2,
    backgroundColor: COLORS.color2,
    borderRadius: 10,
    paddingLeft: SPACING * 4,
    paddingRight: SPACING * 2,
    paddingVertical: SPACING,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 5,
  },
});
