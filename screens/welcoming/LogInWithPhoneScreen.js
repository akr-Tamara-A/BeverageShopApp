import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenView from '../../components/Screen';
import SmallText from '../../components/text/SmallText';
import TitleBoldText from '../../components/text/TitleBoldText';
import MainButton from '../../components/buttons/MainButton';
import {COLORS} from '../../styles/defaultColors';
import {IconCall} from '../../components/icons/UXIcons';
import {phoneStyling} from '../../utils/utils';
import StyledInput from '../../components/StyledInput';

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
            <IconCall fill={COLORS.primaryDark} />
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
        <StyledInput
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={handleChangeText}
          label="Mobile number"
          placeholder="(000) 000-0000"
          icon={<IconCall fill={COLORS.primaryDark} height={30} width={30} />}
          iconPosition="left"
        />
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
});
