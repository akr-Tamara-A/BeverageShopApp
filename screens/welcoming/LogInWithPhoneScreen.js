import * as React from 'react';
import {Animated, StyleSheet, View, Easing} from 'react-native';
import ScreenView from '../../components/Screen';
import NormalText from '../../components/text/NormalText';
import MainButton from '../../components/buttons/MainButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import IconButton from '../../components/buttons/IconButton';
import {COLORS} from '../../styles/defaultColors';

function LogInWithPhoneScreen({navigation}) {
  return (
    <ScreenView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <NormalText textColor="light">Log In With Phone Screen</NormalText>
      <MainButton
        title="Go to Verify Phone Number"
        onPress={() => navigation.navigate('Verify Phone Number')}
      />
    </ScreenView>
  );
}

export default LogInWithPhoneScreen;

// document.getElementById('phone').addEventListener('input', function (e) {
//   var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//   e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// });
// <input type="text" id="phone" placeholder="(555) 555-5555"/>
