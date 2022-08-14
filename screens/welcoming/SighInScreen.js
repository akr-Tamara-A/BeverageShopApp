import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import ScreenView from '../../components/Screen';
import SmallText from '../../components/text/SmallText';
import BoldText from '../../components/text/BoldText';
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
              <BoldText textColor="light">Mobile number</BoldText>
              <View>
                <View style={[styles.inputIcon, styles.inputIconLeft]}>
                  <IconCall fill={COLORS.color5} height={30} width={30} />
                </View>
                <TextInput
                  style={[styles.input, styles.inputLeftIcon]}
                  placeholder="(000) 000-0000"
                  placeholderTextColor={COLORS.color3}
                  keyboardType="phone-pad"
                  value={mobileNumber}
                  onChangeText={handleChangePhone}
                />
              </View>
            </View>
            <View>
              <View style={styles.label}>
                <BoldText textColor="light">Full name</BoldText>
                <SmallText textColor="light">Minimum 4 characters</SmallText>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  keyboardType="default"
                  value={fullName}
                  onChangeText={handleChangeFullName}
                />
              </View>
            </View>
            <View>
              <View style={styles.label}>
                <BoldText textColor="light">Password</BoldText>
                <SmallText textColor="light">Minimum 8 characters</SmallText>
              </View>
              <View>
                <TextInput
                  style={[styles.input, styles.inputRightIcon]}
                  keyboardType="default"
                  secureTextEntry={!viewPassword}
                  value={password}
                  onChangeText={handleChangePassword}
                />
                <View style={[styles.inputIcon, styles.inputIconRight]}>
                  <TouchableWithoutFeedback
                    onPress={() => setViewPassword(!viewPassword)}>
                    <Image
                      source={
                        viewPassword ? iconViewPassword : iconHidePassword
                      }
                      style={{width: 36, height: 36}}
                    />
                  </TouchableWithoutFeedback>
                </View>
              </View>
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
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: SPACING * 2,
    backgroundColor: COLORS.color2,
    borderRadius: 10,
    paddingHorizontal: SPACING * 2,
    paddingVertical: SPACING,
    fontSize: 20,
  },
  inputLeftIcon: {
    paddingLeft: SPACING * 5,
  },
  inputRightIcon: {
    paddingRight: SPACING * 5,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    zIndex: 5,
  },
  inputIconLeft: {
    left: 8,
  },
  inputIconRight: {
    right: 8,
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
    backgroundColor: COLORS.color10,
    justifyContent: 'center',
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
