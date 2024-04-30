export const selectStyles = {
  control: (baseStyles, state) => {
    return {
      ...baseStyles,
      height: 48,
      paddingLeft: 8,
      paddingRight: 8,
      borderRadius: 12,
      background: '#F6F6F6',
      borderStyle: state.IsFocused ? 'none' : 'none',
      boxShadow: state.IsFocused ? 'none' : 'none',
      transition: 'all 300ms',
      cursor: 'pointer',
      '@media (min-width: 1440px)': { height: 52 },
    };
  },
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: 'rgba(31, 27, 26, 0.65)',
    fontSize: 16,
    lineHeight: 1.55,
    letterSpacing: '0.04em',
    '@media (min-width: 1440px)': { fontSize: 18 },
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    stroke: '#1F1B1A',
    transform: 'rotate(-90deg)',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#F6F6F6',
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
    padding: 0,
    fontSize: 16,
    lineHeight: 1.55,
    letterSpacing: '0.04em',
    '@media (min-width: 1440px)': { fontSize: 18 },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isSelected ? '#EBB41C' : '#1F1B1A',
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor:
      state.isFocused & !state.isSelected
        ? '#CACAC5'
        : state.isFocused & state.isSelected
          ? '#F6F6F6'
          : '#F6F6F6',
    userSelect: 'red',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: 16,
    lineHeight: 1.55,
    letterSpacing: '0.04em',
    '@media (min-width: 1440px)': { fontSize: 18 },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: '#EBB41C',
    fontSize: 16,
    lineHeight: 1.55,
    letterSpacing: '0.04em',
    '@media (min-width: 1440px)': { fontSize: 18 },
  }),
};
