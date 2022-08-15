import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import ShopScreen from '../screens/shop/ShopScreen';
import CategoriesScreen from '../screens/shop/CategoriesScreen';
import SubCategoriesScreen from '../screens/shop/SubCategoriesScreen';
import CategoryScreen from '../screens/shop/CategoryScreen';
import RecentPurchasesScreen from '../screens/shop/RecentPurchasesScreen';
import ProductItemScreen from '../screens/shop/ProductItemScreen';
import OfferScreen from '../screens/shop/OfferScreen';
import SearchScreen from '../screens/shop/SearchScreen';
import {headerBarStyle} from '../styles/headerBarStyle';

const ShopStack = createNativeStackNavigator();

export default function ShopNavigation({route, navigation}) {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['Search'];
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <ShopStack.Navigator screenOptions={headerBarStyle}>
      <ShopStack.Screen name="Shop" component={ShopScreen} />
      <ShopStack.Screen name="Categories" component={CategoriesScreen} />
      <ShopStack.Screen name="SubCategories" component={SubCategoriesScreen} />
      <ShopStack.Screen name="Category" component={CategoryScreen} />
      <ShopStack.Screen
        name="Recent Purchases"
        component={RecentPurchasesScreen}
      />
      <ShopStack.Screen name="Product Item" component={ProductItemScreen} />
      <ShopStack.Screen name="Offer" component={OfferScreen} />
      <ShopStack.Screen name="Search" component={SearchScreen} />
    </ShopStack.Navigator>
  );
}
