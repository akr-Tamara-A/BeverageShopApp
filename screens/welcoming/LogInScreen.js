import * as React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Easing,
  Modal,
  Dimensions,
} from 'react-native';
import ScreenView from '../../components/Screen';
import NormalText from '../../components/text/NormalText';
import TitleBoldText from '../../components/text/TitleBoldText';
import MainButton from '../../components/buttons/MainButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import SvgButton from '../../components/buttons/SvgButton';
import IconButton from '../../components/buttons/IconButton';
import {COLORS} from '../../styles/defaultColors';
import {IconClose} from '../../components/icons/UIIcons';

const {width, height} = Dimensions.get('window');

const MODAL_WIDTH = width * 0.8;
const MODAL_HEIGHT = height * 0.7;

function LogInWithPhoneScreen({navigation}) {
  const translateYa = new Animated.Value(0);
  const translateYb = new Animated.Value(0);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [authorization, setAuthorization] = React.useState('');

  /** */
  React.useEffect(() => {
    Animated.parallel([
      Animated.loop(
        Animated.timing(translateYa, {
          toValue: -500,
          duration: 8000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ),
      Animated.loop(
        Animated.timing(translateYb, {
          toValue: -500,
          duration: 8000,
          delay: 4000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** */
  return (
    <ScreenView style={styles.screen}>
      <View style={styles.bubblesContainer}>
        {[...Array(8).keys()].map(index => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.bubble,
                {
                  left: index * 35,
                  bottom: Math.round(Math.random() * 200) - 250,
                  transform: [{translateY: translateYa}],
                },
              ]}
            />
          );
        })}
        {[...Array(8).keys()].map(index => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.bubble,
                {
                  left: index * 35,
                  bottom: Math.round(Math.random() * 200) - 250,
                  transform: [{translateY: translateYb}],
                },
              ]}
            />
          );
        })}
      </View>
      <View style={styles.wraper}>
        <MainButton
          title="Continue with phone"
          onPress={() => navigation.navigate('Log In With Phone')}
        />
        <View>
          <NormalText textColor="light">or continue with</NormalText>
        </View>
        <View style={styles.socials}>
          <IconButton
            label="Facebook"
            icon={require('../../assets/icons/social/facebook.png')}
            onPress={() => {
              setModalVisible(true);
              setAuthorization('Facebook');
            }}
          />
          <IconButton
            label="Google"
            icon={require('../../assets/icons/social/google.png')}
            onPress={() => {
              setModalVisible(true);
              setAuthorization('Google');
            }}
          />
          <IconButton
            label="Whatsapp"
            icon={require('../../assets/icons/social/whatsapp.png')}
            onPress={() => {
              setModalVisible(true);
              setAuthorization('Whatsapp');
            }}
          />
        </View>
      </View>
      <View style={styles.sighUpButton}>
        <NormalText textColor="light">Don`t have account?</NormalText>
        <SecondaryButton title="sigh up" onPress={() => {}} />
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
                  setAuthorization('');
                }}>
                <IconClose />
              </SvgButton>
            </View>
            <TitleBoldText>This is fake authorization</TitleBoldText>
            <TitleBoldText>{authorization}</TitleBoldText>
            <MainButton
              title="Click to fake log in"
              onPress={() => {
                setModalVisible(false);
                setAuthorization('');
                navigation.navigate('App');
              }}
            />
          </View>
        </View>
      </Modal>
    </ScreenView>
  );
}

export default LogInWithPhoneScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bubblesContainer: {
    width: '70%',
    height: 200,
    overflow: 'hidden',
  },
  bubble: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: COLORS.color10,
    borderWidth: 2,
  },
  wraper: {
    alignItems: 'center',
  },
  socials: {
    flexDirection: 'row',
    margin: 10,
  },
  sighUpButton: {
    margin: 40,
    alignItems: 'center',
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
