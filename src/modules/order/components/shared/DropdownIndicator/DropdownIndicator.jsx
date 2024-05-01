import { components } from 'react-select';
import { icons as sprite } from 'shared/icons';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg role="img" width={24} height={24}>
        <use xlinkHref={`${sprite}#arrow-left`} />
      </svg>
    </components.DropdownIndicator>
  );
};
export default DropdownIndicator;
