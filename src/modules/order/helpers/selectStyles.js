import { fontStyles } from '../data';
import { colorVariables } from '../data';

const {
  primaryLightGreyColor,
  primaryDarkGreyColor,
  placeholderColor,
  primaryBlackColor,
  primaryYellowColor,
} = colorVariables;

export const selectStyles = {
  control: (baseStyles, state) => {
    return {
      ...baseStyles,
      height: 48,
      paddingLeft: 8,
      paddingRight: 8,
      borderRadius: 12,
      background: primaryLightGreyColor,
      borderStyle: state.IsFocused ? 'none' : 'none',
      boxShadow: state.IsFocused ? 'none' : 'none',
      transition: 'all 300ms',
      cursor: 'pointer',
      '@media (min-width: 1440px)': { height: 52 },
    };
  },
  placeholder: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
    color: placeholderColor,
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    stroke: primaryBlackColor,
    transform: 'rotate(-90deg)',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: primaryLightGreyColor,
    borderRadius: 0,
    borderStyle: 'none',
    boxShadow: 'none',
    marginTop: 4,
    height: 'fit-content',
    padding: 0,
  }),
  menuList: (baseStyles) => ({ ...baseStyles, maxHeight: 362 }),
  input: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
    padding: 0,
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    ...fontStyles,
    color: state.isSelected ? primaryYellowColor : primaryBlackColor,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor:
      state.isFocused & !state.isSelected
        ? primaryDarkGreyColor
        : state.isFocused & state.isSelected
          ? primaryLightGreyColor
          : primaryLightGreyColor,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:active': { backgroundColor: primaryDarkGreyColor },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
    color: primaryYellowColor,
  }),
  loadingMessage: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
  }),
  noOptionsMessage: (baseStyles) => ({
    ...baseStyles,
    ...fontStyles,
  }),
};
