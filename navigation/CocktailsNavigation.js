import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import CoctailsScreen from '../screens/cocktails/CoctailsScreen';
import MainCategoriesScreen from '../screens/cocktails/MainCategoriesScreen';
import SubCategoriesScreen from '../screens/cocktails/SubCategoriesScreen';
import CategoryScreen from '../screens/cocktails/CategoryScreen';
import CocktailItemScreen from '../screens/cocktails/CocktailItemScreen';
import SearchScreen from '../screens/cocktails/SearchScreen';

const CocktailsStack = createNativeStackNavigator();

export default function CocktailsNavigation({route, navigation}) {
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
    <CocktailsStack.Navigator>
      <CocktailsStack.Screen name="Coctails" component={CoctailsScreen} />
      <CocktailsStack.Screen
        name="Main Categories"
        component={MainCategoriesScreen}
      />
      <CocktailsStack.Screen
        name="Sub Categories"
        component={SubCategoriesScreen}
      />
      <CocktailsStack.Screen name="Category" component={CategoryScreen} />
      <CocktailsStack.Screen
        name="Cocktail Item"
        component={CocktailItemScreen}
      />
      <CocktailsStack.Screen name="Search" component={SearchScreen} />
    </CocktailsStack.Navigator>
  );
}
