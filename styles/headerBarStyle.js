import * as React from 'react';
import {COLORS} from './defaultColors';

export const headerBarStyle = () => {
  return {
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTransparent: true,
    headerTintColor: COLORS.primaryLight,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Quattrocento-Regular',
    },
  };
};
