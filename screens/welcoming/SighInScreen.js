import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Dimensions,
} from 'react-native';
import ScreenView from '../../components/Screen';
import SmallText from '../../components/text/SmallText';
import TitleBoldText from '../../components/text/TitleBoldText';
import MainButton from '../../components/buttons/MainButton';
import {COLORS} from '../../styles/defaultColors';
import {IconCall} from '../../components/icons/UXIcons';
import {IconClose} from '../../components/icons/UIIcons';
import {phoneStyling} from '../../utils/utils';
import iconViewPassword from '../../assets/icons/view.png';
import iconHidePassword from '../../assets/icons/hide.png';
import SvgButton from '../../components/buttons/SvgButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import StyledInput from '../../components/StyledInput';

const {width, height} = Dimensions.get('window');

const SPACING = 10;
const MODAL_WIDTH = width * 0.8;
const MODAL_HEIGHT = height * 0.7;

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
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.modal}>
              <View style={styles.modalContainer}>
                <View style={styles.closeButton}>
                  <SvgButton
                    background={false}
                    icon={IconClose}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <IconClose />
                  </SvgButton>
                </View>
                <TitleBoldText>Something went wrong</TitleBoldText>
                <TitleBoldText>Try again</TitleBoldText>
                <SecondaryButton
                  title="Try again"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </Modal>
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  modalContainer: {
    width: MODAL_WIDTH,
    height: MODAL_HEIGHT,
    backgroundColor: COLORS.accent,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
