import * as React from 'react';
import {View, Button} from 'react-native';
import TitleText from '../../components/text/TitleText';

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TitleText>Profile Screen</TitleText>
      <Button
        title="Go to My Profile"
        onPress={() => navigation.navigate('My Profile')}
      />
      <Button
        title="Go to Payment Setting"
        onPress={() => navigation.navigate('Payment Setting')}
      />
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate('Notification')}
      />
      <Button
        title="Go to Track Order"
        onPress={() => navigation.navigate('Track Order')}
      />
      <Button
        title="Go to Wishlist"
        onPress={() => navigation.navigate('Wishlist')}
      />
    </View>
  );
}

export default ProfileScreen;
