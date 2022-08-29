import * as React from 'react';
import {COLORS} from './defaultColors';

export const headerBarStyle = () => {
  return {
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTransparent: true,
    headerTintColor: COLORS.secondaryLight,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Quattrocento-Regular',
    },
    headerTitleAlign: 'center',
  };
};
