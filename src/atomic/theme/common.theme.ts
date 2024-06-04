import {DefaultTheme} from 'styled-components/native';

enum BrandColors {
  Primary = '#e35205',
  Secondary = '#333333',
  White = '#fff',
  Black = '#000',
  Grey_100 = '#EBEBEB',
}

export const CommonTheme: DefaultTheme = {
  colors: {
    primary: BrandColors.Primary,
    secondary: BrandColors.Secondary,
    white: BrandColors.White,
    black: BrandColors.Black,
    grey100: BrandColors.Grey_100,
  },
  flex: {flex: 1},
  gap: {
    [10]: 10,
    [15]: 15,
    [20]: 20,
    [30]: 30,
    [55]: 55,
  },
  width: {
    [24]: 24,
  },
  height: {
    [24]: 24,
  },
  sizes: {
    small: 24,
    medium: 48,
    large: 72,
  },

  font_size: {
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
    xxxlarge: 30,
  },

  line_height: {
    small: 18,
    medium: 20,
    large: 72,
  },

  margin: {
    small: 10,
    medium: 25,
    large: 20,
  },
};
