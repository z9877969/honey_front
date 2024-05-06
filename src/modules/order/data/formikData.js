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
  deliveryType: Yup.string().required(),
  location: Yup.object().required(),
  address: Yup.string().required(),
  comment: Yup.string()
    .max(300, 'Максимальна довжина тексту - 300 символів')
    .matches(
      /^[а-яА-ЯґҐєЄіІїЇ0-9 .,-/"()!?]+$/,
      'Коментар може містити лише символи кирилиці, цифри та знаки .,!?/-"():;'
    ),
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
