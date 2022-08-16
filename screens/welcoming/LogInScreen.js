import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, View, Easing} from 'react-native';
import ScreenView from '../../components/Screen';
import NormalText from '../../components/text/NormalText';
import MainButton from '../../components/buttons/MainButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import IconButton from '../../components/buttons/IconButton';
import {COLORS} from '../../styles/defaultColors';
import StyledModal from '../../components/StyledModal';

function LogInWithPhoneScreen({navigation}) {
  const translateYa = new Animated.Value(0);
  const translateYb = new Animated.Value(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [authorization, setAuthorization] = useState('');

  /** */
  useEffect(() => {
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
        <SecondaryButton
          title="sigh up"
          onPress={() => navigation.navigate('Sigh In')}
        />
      </View>
      <StyledModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setAuthorization('');
        }}
        messages={['This is fake authorization', authorization]}
        buttonTitle="Click to fake log in"
        buttonOnPress={() => {
          setModalVisible(false);
          setAuthorization('');
          navigation.navigate('App');
        }}
      />
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
    borderColor: COLORS.secondaryLight,
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
});
