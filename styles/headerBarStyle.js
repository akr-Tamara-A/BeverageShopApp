import * as React from 'react';
import {COLORS} from './defaultColors';

export const headerBarStyle = () => {
  return {
    headerStyle: {
      backgroundColor: COLORS.background,
    },
    headerTintColor: COLORS.color9,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Quattrocento-Regular',
    },
  };
};
