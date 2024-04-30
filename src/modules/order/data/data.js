import * as Yup from 'yup';

export const contactFormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^[а-яА-ЯґҐєЄіІїЇ]+(?:-[а-яА-ЯґҐєЄіІїЇ]+)*$/,
      'Будь ласка, введіть коректне ім’я кирилицею'
    )
    .required('Будь ласка, введіть коректне ім’я кирилицею'),
  lastName: Yup.string()
    .matches(
      /^[а-яА-ЯґҐєЄіІїЇ]+(?:-[а-яА-ЯґҐєЄіІїЇ]+)*$/,
      'Будь ласка, введіть коректне прізвище кирилицею'
    )
    .required('Будь ласка, введіть коректне прізвище кирилицею'),
  number: Yup.string()
    .matches(/^\+380\d{9}$/, 'Введіть коректний номер мобільного телефону')
    .required('Введіть коректний номер мобільного телефону'),
  deliveryType: Yup.string().required(''),
  location: Yup.object().required(''),
  address: Yup.string().required('required'),
});

export const orderFormInitialValues = {
  firstName: '',
  lastName: '',
  number: '',
  deliveryType: '',
  location: '',
  address: '',
  comment: '',
};

export const deliveryTypeOptions = [
  { value: 'Доставка до відділення', label: 'Доставка до відділення' },
  { value: 'Доставка кур`єром', label: 'Доставка кур`єром' },
];

export const defaultOptionsForLocationSelect = [
  {
    value: { city: 'Київ', cityId: 'e718a680-4b33-11e4-ab6d-005056801329' },
    label: 'м. Київ, Київська обл.',
  },
  {
    value: { city: 'Дніпро', cityId: 'e717110a-4b33-11e4-ab6d-005056801329' },
    label: 'м. Дніпро, Дніпропетровська обл.',
  },
  {
    value: { city: 'Харків', cityId: 'e71f8842-4b33-11e4-ab6d-005056801329' },
    label: 'м. Харків, Харківська обл.',
  },
  {
    value: {
      city: 'Запоріжжя',
      cityId: 'e717bce9-4b33-11e4-ab6d-005056801329',
    },
    label: 'м. Запоріжжя, Запорізька обл.',
  },
  {
    value: { city: 'Одеса', cityId: 'e71c2a15-4b33-11e4-ab6d-005056801329' },
    label: 'м. Одеса, Одеська обл.',
  },
  {
    value: {
      city: 'Кривий Ріг',
      cityId: 'e71a2cab-4b33-11e4-ab6d-005056801329',
    },
    label: 'м. Кривий Ріг, Дніпропетровська обл.',
  },
  {
    value: { city: 'Львів', cityId: 'e71abb60-4b33-11e4-ab6d-005056801329' },
    label: 'м. Львів, Львівська обл.',
  },
  {
    value: { city: 'Вінниця', cityId: 'e71629ab-4b33-11e4-ab6d-005056801329' },
    label: 'м. Вінниця, Вінницька обл.',
  },
  {
    value: { city: 'Миколаїв', cityId: 'e71b108c-4b33-11e4-ab6d-005056801329' },
    label: 'м. Миколаїв, Миколаївська обл.',
  },
  {
    value: { city: 'Полтава', cityId: 'e71d006d-4b33-11e4-ab6d-005056801329' },
    label: 'м. Полтава, Полтавська обл.',
  },
];
