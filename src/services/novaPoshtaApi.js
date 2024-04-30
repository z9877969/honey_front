import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://api.novaposhta.ua/v2.0/json/`,
});

const params = {
  apiKey: '6e62026c53e899af4a129224065bbe73',
  modelName: 'Address',
  calledMethod: '',
  methodProperties: {
    Page: '1',
    Limit: '50',
    Warehouse: '1',
    FindByString: '',
    SettlementRef: '',
  },
};

export async function fetchNPSettlementsByQuery(query, deliveryType) {
  params.calledMethod =
    deliveryType === 'Доставка до відділення' ? 'getSettlements' : 'getCities';
  params.methodProperties.FindByString = query;
  params.methodProperties.SettlementRef = '';

  const { data } = await axiosInstance.post('', params);
  return data.data;
}

export async function fetchNPDivisionsBySettlementId(id) {
  params.calledMethod = 'getWarehouses';
  params.methodProperties.FindByString = '';
  params.methodProperties.SettlementRef = id;

  const { data } = await axiosInstance.post('', params);
  return data.data;
}

export async function fetchNPDivisionsByQuery(query, id) {
  params.calledMethod = 'getWarehouses';
  params.methodProperties.FindByString = query;
  params.methodProperties.SettlementRef = id;

  const { data } = await axiosInstance.post('', params);
  return data.data;
}
