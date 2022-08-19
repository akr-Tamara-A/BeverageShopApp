import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import BoldText from '../../components/text/BoldText';
import TitleBoldText from '../../components/text/TitleBoldText';
import MainButton from '../../components/buttons/MainButton';
import {COLORS} from '../../styles/defaultColors';
import ScreenView from '../../components/Screen';
import {IconHomePin} from '../../components/icons/UXIcons';
import StyledInput from '../../components/StyledInput';
import StyledModal from '../../components/StyledModal';

const SPACING = 10;

function LocationScreen({navigation}) {
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [isDataEntered, setIsDataEntered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false);

  /** */
  useEffect(() => {
    const isDataVerified = city.length >= 3 && address.length >= 5;
    if (isDataVerified) {
      setIsDataEntered(true);
    } else {
      setIsDataEntered(false);
    }
  }, [city, address]);

  /** */
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
        <ScreenView style={styles.centeredView}>
          <View style={styles.screen}>
            <View style={styles.info}>
              <View style={styles.icon}>
                <IconHomePin fill={COLORS.color8} />
              </View>
              <View style={styles.title}>
                <TitleBoldText textColor="light">
                  Please enter a shipping address
                </TitleBoldText>
              </View>
            </View>
            <StyledInput
              keyboardType="default"
              label="City"
              value={city}
              onChangeText={setCity}
            />
            <StyledInput
              keyboardType="default"
              label="Address"
              value={address}
              onChangeText={setAddress}
            />
            <View style={styles.buttonBlock}>
              <View style={styles.messageBlock}>
                {!isDataEntered && (
                  <BoldText textColor="light">
                    Or this can be done later
                  </BoldText>
                )}
              </View>
              <MainButton
                title={isDataEntered ? 'Dive into shopping' : 'View products'}
                onPress={() => navigation.navigate('App')}
              />
            </View>
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

export default LocationScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  input: {
    marginBottom: SPACING * 2,
    backgroundColor: COLORS.color2,
    borderRadius: 10,
    paddingHorizontal: SPACING * 2,
    paddingVertical: SPACING,
    fontSize: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 5,
  },
  buttonBlock: {
    marginTop: 60,
  },
  messageBlock: {
    alignItems: 'center',
    height: 24,
  },
});
