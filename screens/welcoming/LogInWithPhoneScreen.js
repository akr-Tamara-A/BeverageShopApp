import * as React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import ScreenView from '../../components/Screen';
import SmallText from '../../components/text/SmallText';
import BoldText from '../../components/text/BoldText';
import TitleBoldText from '../../components/text/TitleBoldText';
import MainButton from '../../components/buttons/MainButton';
import {COLORS} from '../../styles/defaultColors';
import {IconCall} from '../../components/icons/UXIcons';
import {phoneStyling} from '../../utils/utils';

const SPACING = 10;

function LogInWithPhoneScreen({navigation}) {
  const [mobileNumber, onChangeMobileNumber] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    const state = mobileNumber.length < 14;
    setDisabled(state);
  }, [mobileNumber]);

  /** */
  function handleChangeText(phone) {
    const styledPhone = phoneStyling(phone);
    onChangeMobileNumber(styledPhone);
  }

  /** */
  return (
    <ScreenView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.screen}>
        <View style={styles.info}>
          <View style={styles.icon}>
            <IconCall fill={COLORS.color8} />
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
          <BoldText textColor="light">Mobile number</BoldText>
          <View>
            <View style={styles.inputIcon}>
              <IconCall fill={COLORS.color5} height={30} width={30} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="(000) 000-0000"
              placeholderTextColor={COLORS.color3}
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={handleChangeText}
            />
          </View>
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
    width: '80%',
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
    marginBottom: SPACING * 2,
  },
  title: {
    marginBottom: SPACING,
  },
  input: {
    marginBottom: SPACING * 2,
    backgroundColor: COLORS.color2,
    borderRadius: 10,
    paddingLeft: SPACING * 5,
    paddingRight: SPACING * 2,
    paddingVertical: SPACING,
    fontSize: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 5,
  },
});
