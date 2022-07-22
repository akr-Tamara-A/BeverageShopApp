import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';
import CheckoutScreen from '../screens/cart/CheckoutScreen';
import AddNewAddressScreen from '../screens/cart/AddNewAddressScreen';
import AddPaymentScreen from '../screens/cart/AddPaymentScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const CartStack = createNativeStackNavigator();

export default function CartNavigation({route, navigation}) {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['Checkout', 'Add New Address', 'Add Payment'];
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={CartScreen} />
      <CartStack.Screen name="Checkout" component={CheckoutScreen} />
      <CartStack.Screen
        name="Add New Address"
        component={AddNewAddressScreen}
      />
      <CartStack.Screen name="Add Payment" component={AddPaymentScreen} />
    </CartStack.Navigator>
  );
}
