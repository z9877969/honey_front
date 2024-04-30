import { createSettlementDescription } from './createSettlementDescription';

export function createOptionsForLocationSelect(arr, deliveryType) {
  const locationOptions =
    arr.length > 0
      ? arr.map(
          ({
            Description,
            SettlementTypeDescription,
            AreaDescription,
            RegionsDescription,
            Ref,
          }) => {
            return {
              value: {
                city: createSettlementDescription(
                  deliveryType,
                  Description,
                  SettlementTypeDescription,
                  AreaDescription,
                  RegionsDescription
                ),
                cityId: Ref,
              },
              label: createSettlementDescription(
                deliveryType,
                Description,
                SettlementTypeDescription,
                AreaDescription,
                RegionsDescription
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
