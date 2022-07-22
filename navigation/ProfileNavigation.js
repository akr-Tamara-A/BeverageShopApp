import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import ProfileScreen from '../screens/profile/ProfileScreen';
import MyProfileScreen from '../screens/profile/MyProfileScreen';
import PaymentSettingScreen from '../screens/profile/PaymentSettingScreen';
import NotificationScreen from '../screens/profile/NotificationScreen';
import WishlistScreen from '../screens/profile/WishlistScreen';

const ProfileStack = createNativeStackNavigator();

export default function ProfileNavigation({route, navigation}) {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [
      'Order Details',
      'Track Order',
      'Call',
      'Chat',
      'Feedback',
    ];
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="My Profile" component={MyProfileScreen} />
      <ProfileStack.Screen
        name="Payment Setting"
        component={PaymentSettingScreen}
      />
      <ProfileStack.Screen name="Notification" component={NotificationScreen} />
      <ProfileStack.Screen name="Wishlist" component={WishlistScreen} />
    </ProfileStack.Navigator>
  );
}
