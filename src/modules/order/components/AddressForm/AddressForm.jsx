import InputField from '../shared/InputField/InputField';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import { Field } from 'formik';
import { deliveryTypeOptions } from 'modules/order/data';
import { useEffect, useState } from 'react';
import {
  fetchNPSettlementsByQuery,
  fetchNPDivisionsBySettlementId,
  fetchNPDivisionsByQuery,
} from 'services/novaPoshtaApi';
import OrderTitle from '../shared/OrderTitle/OrderTitle';
import { defaultOptionsForLocationSelect } from 'modules/order/data/data';
import s from './AddressForm.module.scss';
import {
  createOptionsForAddressSelect,
  createOptionsForLocationSelect,
} from 'modules/order/helpers';

const AddressForm = ({
  setFieldValue,
  values: {
    deliveryType,
    location: { cityId },
  },
}) => {
  const [postOffice, setPostOffice] = useState([]);

  const [valueForSelect, setValueForSelect] = useState({
    deliveryType: [],
    locationSelect: [],
    addressSelect: [],
  });

  const getSettlementsList = (inputValue) => {
    async function getNPSettlementsByQuery(query, delivery) {
      try {
        const result = await fetchNPSettlementsByQuery(query, delivery);
        return createOptionsForLocationSelect(result);
      } catch (error) {
        error;
      }
    }
    return getNPSettlementsByQuery(inputValue, deliveryType);
  };

  const getDivisionsList = (inputValue) => {
    async function getNPDivisionsByQuery(ref, id) {
      try {
        const result = await fetchNPDivisionsByQuery(ref, id);
        const options = createOptionsForAddressSelect(
          result,
          'За вашим запитом нічого не знайдено'
        );
        return options;
      } catch (error) {
        error;
      }
    }
    return getNPDivisionsByQuery(inputValue, cityId);
  };

  useEffect(() => {
    if (!cityId) return;
    async function getNPDivisionsBySettlementId(id) {
      try {
        const result = await fetchNPDivisionsBySettlementId(id);
        const options = createOptionsForAddressSelect(
          result,
          'Наразі доставка до обраного населеного пункту не здійнюється'
        );
        setPostOffice(options);
      } catch (error) {
        error;
      }
    }
    getNPDivisionsBySettlementId(cityId);
  }, [cityId]);

  const selectStyles = {
    control: (baseStyles, state) => {
      return {
        ...baseStyles,
        height: '48px',
        borderRadius: '12px',
        background: '#F6F6F6',
        // borderStyle: state.menuIsOpen ? 'none' : 'none',
        borderStyle: state.IsFocused ? 'none' : 'none',
        // borderColor: state.IsFocused ? 'transparent' : 'transparent',

        boxShadow: state.IsFocused ? 'none' : 'none',
        paddingLeft: '16px',
        paddingRight: '16px',
        '@media (max-width: 500px)': { background: 'red' },
      };
    },
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: 'none',
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: '#1F1B1A',
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: '#1F1B1A',
      opacity: 0.4,
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      color: '#1F1B1A',
      paddingLeft: 16,
      paddingRight: 16,
      backgroundColor: '#F6F6F6',
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: '#EBB41C',
    }),
  };

  return (
    <div className={s.addressWrapper}>
      <OrderTitle>Вкажіть адресу доставки (Нова пошта)</OrderTitle>
      <Select
        styles={selectStyles}
        placeholder="Доставка до відділення"
        options={deliveryTypeOptions}
        onChange={(selectOption) => {
          setFieldValue('deliveryType', selectOption.value);
          setFieldValue('address', '');
          setValueForSelect((prev) => ({
            ...prev,
            deliveryType: [selectOption],
            locationSelect: [],
            addressSelect: [],
          }));
        }}
        value={!deliveryType ? [] : valueForSelect.deliveryType}
      />
      <AsyncSelect
        styles={selectStyles}
        isDisabled={!deliveryType}
        placeholder="Оберіть населений пункт"
        defaultOptions={defaultOptionsForLocationSelect}
        loadOptions={getSettlementsList}
        onChange={(selectOption) => {
          setFieldValue('location', selectOption.value);
          setValueForSelect((prev) => ({
            ...prev,
            locationSelect: [selectOption],
            addressSelect: [],
          }));
        }}
        value={!deliveryType ? [] : valueForSelect.locationSelect}
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
          styles={selectStyles}
          isDisabled={!cityId}
          placeholder="Оберіть відділення"
          defaultOptions={postOffice}
          loadOptions={getDivisionsList}
          onChange={(selectOption) => {
            setFieldValue('address', selectOption.value);
            setValueForSelect((prev) => ({
              ...prev,
              addressSelect: [selectOption],
            }));
          }}
          value={!deliveryType ? [] : valueForSelect.addressSelect}
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
