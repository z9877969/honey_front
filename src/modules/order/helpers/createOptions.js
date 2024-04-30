import { createLabel } from './createLable';

export function createOptionsForLocationSelect(arr) {
  const locationOptions =
    arr.length > 0
      ? arr.map(
          ({
            Description,
            SettlementTypeDescription,
            AreaDescription,
            Ref,
          }) => {
            return {
              value: { city: Description, cityId: Ref },
              label: createLabel(
                Description,
                SettlementTypeDescription,
                AreaDescription
              ),
            };
          }
        )
      : [
          {
            value: '',
            label: 'За вашим запитом нічого не знайдено',
          },
        ];
  return locationOptions;
}
export function createOptionsForAddressSelect(arr, message) {
  const addressOptions =
    arr.length > 0
      ? arr.map(({ Description }) => {
          return {
            value: Description,
            label: Description,
          };
        })
      : [
          {
            value: '',
            label: message,
          },
        ];
  return addressOptions;
}
