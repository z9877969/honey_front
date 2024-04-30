import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://api.novaposhta.ua/v2.0/json/`,
  params: { apiKey: '6e62026c53e899af4a129224065bbe73' },
});

export async function fetchNPSettlementsByQuery(query, deliveryType) {
  const params = {
    modelName: 'Address',
    calledMethod:
      deliveryType === 'Доставка до відділення'
        ? 'getSettlements'
        : 'getCities',
    methodProperties: {
      FindByString: query,
      Warehouse: '1',
      Page: '1',
      Limit: '50',
    },
  };
  const { data } = await axiosInstance.post('', params);
  return data.data;
}

export async function fetchNPDivisionsBySettlementId(id) {
  const params = {
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      SettlementRef: id,
      Page: '1',
      Limit: '100',
      Warehouse: '1',
    },
  };
  const { data } = await axiosInstance.post('', params);
  return data.data;
}

export async function fetchNPDivisionsByQuery(query, id) {
  const params = {
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      FindByString: query,
      SettlementRef: id,
    },
  };
  const { data } = await axiosInstance.post('', params);
  return data.data;
}
