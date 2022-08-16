import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ScreenView from '../../components/Screen';
import SmallText from '../../components/text/SmallText';
import TitleBoldText from '../../components/text/TitleBoldText';
import MainButton from '../../components/buttons/MainButton';
import {COLORS} from '../../styles/defaultColors';
import {IconCall} from '../../components/icons/UXIcons';
import {phoneStyling} from '../../utils/utils';
import iconViewPassword from '../../assets/icons/view.png';
import iconHidePassword from '../../assets/icons/hide.png';
import StyledInput from '../../components/StyledInput';
import StyledModal from '../../components/StyledModal';

const SPACING = 10;

function SighInScreen({navigation}) {
  const [disabled, setDisabled] = useState(true);
  const [mobileNumber, onChangeMobileNumber] = useState('');
  const [fullName, onChangeFullName] = useState('');
  const [password, onChangePassword] = useState('');
  const [viewPassword, setViewPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const state =
      mobileNumber.length < 14 || fullName.length < 4 || password.length < 8;
    setDisabled(state);
  }, [mobileNumber, fullName, password]);

  /** */
  function handleChangePhone(phone) {
    const styledPhone = phoneStyling(phone);
    onChangeMobileNumber(styledPhone);
  }

  /** */
  function handleChangeFullName(name) {
    onChangeFullName(name);
  }

  /** */
  function handleChangePassword(text) {
    onChangePassword(text);
  }

  useEffect(() => {
    error && setModalVisible(true);
  }, [error]);

  /** */
  return (
    <KeyboardAvoidingView
      behavior={'position'}
      keyboardVerticalOffset={-120}
      contentContainerStyle={{flex: 1}}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScreenView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.screen}>
            <View style={styles.info}>
              <View style={styles.title}>
                <TitleBoldText textColor="light">
                  Let`s get you started
                </TitleBoldText>
              </View>
              <SmallText textColor="light">First, create an account</SmallText>
            </View>
            <View>
              <StyledInput
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={handleChangePhone}
                label="Mobile number"
                placeholder="(000) 000-0000"
                icon={
                  <IconCall fill={COLORS.primaryDark} height={30} width={30} />
                }
                iconPosition="left"
              />
              <StyledInput
                keyboardType="default"
                label="Full name"
                info="Minimum 4 characters"
                value={fullName}
                onChangeText={handleChangeFullName}
              />
              <StyledInput
                keyboardType="default"
                label="Password"
                info="Minimum 8 characters"
                value={password}
                onChangeText={handleChangePassword}
                secureTextEntry={!viewPassword}
                button={true}
                buttonPosition="right"
                buttonIconSrc={
                  viewPassword ? iconViewPassword : iconHidePassword
                }
                buttonOnPress={() => setViewPassword(!viewPassword)}
              />
            </View>
            <MainButton
              title="Continue"
              disabled={disabled}
              onPress={() => {
                !disabled && navigation.navigate('Location');
              }}
            />
          </View>
          <StyledModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            messages={['Something went wrong', 'Try again']}
            buttonTitle="Try again"
            buttonOnPress={() => setModalVisible(false)}
          />
        </ScreenView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SighInScreen;

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
