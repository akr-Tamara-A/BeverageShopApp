import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopNavigation from './ShopNavigation';
import CartNavigation from './CartNavigation';
import OrdersNavigation from './OrdersNavigation';
import CocktailsNavigation from './CocktailsNavigation';
import ProfileNavigation from './ProfileNavigation';
import {
  IconShop,
  IconBag,
  IconRecept,
  IconCoctail,
  IconPerson,
} from '../components/icons/UXIcons';
import StyledBottomTabs from '../components/StyledBottomTabs';

const Tab = createBottomTabNavigator();

/** */
export function tabsData(color) {
  return {
    'Shop Screen': {
      icon: <IconShop height={30} width={30} fill={color} />,
      label: 'Shop',
    },
    'Cart Screen': {
      icon: <IconBag height={30} width={30} fill={color} />,
      label: 'Cart',
    },
    'Orders Screen': {
      icon: <IconRecept height={30} width={30} fill={color} />,
      label: 'Orders',
    },
    'Coctails Screen': {
      icon: <IconCoctail height={30} width={30} fill={color} />,
      label: 'Coctails',
    },
    'Profile Screen': {
      icon: <IconPerson height={30} width={30} fill={color} />,
      label: 'Profile',
    },
  };
}

/** */
export default function TabNavigation() {
  return (
    <Tab.Navigator tabBar={props => <StyledBottomTabs {...props} />}>
      <Tab.Screen
        name="Shop Screen"
        component={ShopNavigation}
        options={{
          title: 'Shop',
          headerShown: false,
        }}
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
