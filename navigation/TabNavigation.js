import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopNavigation from './ShopNavigation';
import CartNavigation from './CartNavigation';
import OrdersNavigation from './OrdersNavigation';
import CocktailsNavigation from './CocktailsNavigation';
import ProfileNavigation from './ProfileNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Shop Screen"
        component={ShopNavigation}
        options={{title: 'Shop', headerShown: false}}
      />
      <Tab.Screen
        name="Cart Screen"
        component={CartNavigation}
        options={{title: 'Cart', headerShown: false}}
      />
      <Tab.Screen
        name="Orders Screen"
        component={OrdersNavigation}
        options={{title: 'Orders', headerShown: false}}
      />
      <Tab.Screen
        name="Coctails Screen"
        component={CocktailsNavigation}
        options={{title: 'Coctails', headerShown: false}}
      />
      <Tab.Screen
        name="Profile Screen"
        component={ProfileNavigation}
        options={{title: 'Profile', headerShown: false}}
      />
    </Tab.Navigator>
  );
}
