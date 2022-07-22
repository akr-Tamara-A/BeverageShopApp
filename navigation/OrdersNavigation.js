import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import OrdersScreen from '../screens/orders/OrdersScreen';
import OrderDetailsScreen from '../screens/orders/OrderDetailsScreen';
import TrackOrderScreen from '../screens/orders/TrackOrderScreen';
import CallScreen from '../screens/orders/CallScreen';
import ChatScreen from '../screens/orders/ChatScreen';
import FeedbackScreen from '../screens/orders/FeedbackScreen';

const OrdersStack = createNativeStackNavigator();

export default function OrdersNavigation({route, navigation}) {
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
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Order Details" component={OrderDetailsScreen} />
      <OrdersStack.Screen name="Track Order" component={TrackOrderScreen} />
      <OrdersStack.Screen name="Call" component={CallScreen} />
      <OrdersStack.Screen name="Chat" component={ChatScreen} />
      <OrdersStack.Screen name="Feedback" component={FeedbackScreen} />
    </OrdersStack.Navigator>
  );
}
