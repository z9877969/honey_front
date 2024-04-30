import { useEffect, useState } from 'react';
import {
  createOptionsForAddressSelect,
  createOptionsForLocationSelect,
} from 'modules/order/helpers';
import {
  fetchNPDivisionsByQuery,
  fetchNPDivisionsBySettlementId,
  fetchNPSettlementsByQuery,
} from 'services/novaPoshtaApi';

const useNovaPoshta = (deliveryType, cityId) => {
  const [divisions, setDivisions] = useState([]);
  const [valueForSelect, setValueForSelect] = useState({
    deliveryType: [],
    locationSelect: [],
    addressSelect: [],
  });

  async function getSettlementsList(inputValue) {
    try {
      const result = await fetchNPSettlementsByQuery(inputValue, deliveryType);
      return createOptionsForLocationSelect(result);
    } catch (error) {
      error;
    }
  }

  async function getDivisionsList(inputValue) {
    try {
      const result = await fetchNPDivisionsByQuery(inputValue, cityId);
      const options = createOptionsForAddressSelect(
        result,
        'За вашим запитом нічого не знайдено'
      );
      return options;
    } catch (error) {
      error;
    }
  }

  useEffect(() => {
    if (!cityId) return;
    async function getNPDivisionsBySettlementId(id) {
      try {
        const result = await fetchNPDivisionsBySettlementId(id);
        const options = createOptionsForAddressSelect(
          result,
          'Наразі доставка до обраного населеного пункту не здійнюється'
        );
        setDivisions(options);
      } catch (error) {
        error;
      }
    }
    getNPDivisionsBySettlementId(cityId);
  }, [cityId]);

  return {
    divisions,
    valueForSelect,
    setValueForSelect,
    getSettlementsList,
    getDivisionsList,
  };
};

export default useNovaPoshta;
