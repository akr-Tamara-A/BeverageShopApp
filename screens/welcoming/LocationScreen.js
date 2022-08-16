import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SmallText from '../../components/text/SmallText';
import BoldText from '../../components/text/BoldText';
import TitleBoldText from '../../components/text/TitleBoldText';
import MainButton from '../../components/buttons/MainButton';
import {COLORS} from '../../styles/defaultColors';
import ScreenView from '../../components/Screen';
import {IconHomePin} from '../../components/icons/UXIcons';

const SPACING = 10;

function LocationScreen({navigation}) {
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [disabled, setDisabled] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior={'position'}
      keyboardVerticalOffset={-120}
      contentContainerStyle={{flex: 1}}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScreenView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
              {/* <SmallText textColor="light">This can be done later</SmallText> */}
            </View>
            <View>
              <BoldText textColor="light">City</BoldText>
              <View>
                <TextInput
                  style={styles.input}
                  keyboardType="default"
                  value={city}
                  onChangeText={setCity}
                />
              </View>
            </View>
            <View>
              <BoldText textColor="light">Address</BoldText>
              <View>
                <TextInput
                  style={styles.input}
                  keyboardType="default"
                  value={address}
                  onChangeText={setAddress}
                />
              </View>
            </View>
          </View>
        </ScreenView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default LocationScreen;

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
});
