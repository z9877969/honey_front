import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { Field } from 'formik';
import useNovaPoshta from 'hooks/useNovaPosha';
import { deliveryTypeOptions } from 'modules/order/data/selectOptions';
import { selectStyles } from 'modules/order/data/selectStyles';
import { defaultOptionsForLocationSelect } from 'modules/order/data/selectOptions';
import OrderTitle from '../shared/OrderTitle/OrderTitle';
import InputField from '../shared/InputField/InputField';
import DropdownIndicator from '../shared/DropdownIndicator/DropdownIndicator';
import s from './AddressForm.module.scss';

const AddressForm = ({
  setFieldValue,
  values: {
    deliveryType,
    location: { cityId },
  },
}) => {
  const {
    divisions,
    valueForSelect,
    setValueForSelect,
    getSettlementsList,
    getDivisionsList,
  } = useNovaPoshta(deliveryType, cityId);

  return (
    <div className={s.addressWrapper}>
      <OrderTitle>Вкажіть адресу доставки (Нова пошта)</OrderTitle>
      <Select
        placeholder="Доставка до відділення"
        value={!deliveryType ? [] : valueForSelect.deliveryType}
        options={deliveryTypeOptions}
        components={{ DropdownIndicator }}
        styles={selectStyles}
        onChange={(selectOption) => {
          setFieldValue('deliveryType', selectOption.value);
          setFieldValue('location', '');
          setFieldValue('address', '');
          setValueForSelect((prev) => ({
            ...prev,
            deliveryType: [selectOption],
            locationSelect: [],
            addressSelect: [],
          }));
        }}
      />

      <AsyncSelect
        isDisabled={!deliveryType}
        placeholder="Оберіть населений пункт"
        value={!deliveryType ? [] : valueForSelect.locationSelect}
        defaultOptions={defaultOptionsForLocationSelect}
        loadOptions={getSettlementsList}
        components={{ DropdownIndicator }}
        styles={selectStyles}
        onChange={(selectOption) => {
          setFieldValue('location', selectOption.value);
          setFieldValue('address', '');
          setValueForSelect((prev) => ({
            ...prev,
            locationSelect: [selectOption],
            addressSelect: [],
          }));
        }}
      />
      {deliveryType === 'Доставка кур`єром' ? (
        <InputField
          name="address"
          placeholder="Введіть адресу доставки"
          wrapperClassName={s.inputWrapper}
          invalidClassName={s.invalid}
        />
      ) : (
        <AsyncSelect
          isDisabled={!cityId}
          placeholder="Оберіть відділення"
          value={!deliveryType ? [] : valueForSelect.addressSelect}
          defaultOptions={divisions}
          loadOptions={getDivisionsList}
          components={{ DropdownIndicator }}
          styles={selectStyles}
          onChange={(selectOption) => {
            setFieldValue('address', selectOption.value);
            setValueForSelect((prev) => ({
              ...prev,
              addressSelect: [selectOption],
            }));
          }}
        />
      )}
      <Field
        as="textarea"
        name="comment"
        placeholder="Додати коментар до замовлення"
        className={s.comment}
      />
    </div>
  );
};

export default AddressForm;
