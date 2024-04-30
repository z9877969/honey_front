import { useId } from 'react';
import InputField from '../shared/InputField/InputField';
import OrderTitle from '../shared/OrderTitle/OrderTitle';
import s from './ContactForm.module.scss';

const ContactForm = () => {
  const formId = {
    firstName: useId(),
    lastName: useId(),
    number: useId(),
  };
  return (
    <div className={s.contactsWrapper}>
      <OrderTitle>Контактні дані:</OrderTitle>
      <InputField
        label="Ім'я"
        name="firstName"
        type="text"
        id={formId.firstName}
        placeholder="Ім'я"
        wrapperClassName={s.inputWrapper}
        invalidClassName={s.invalid}
      />
      <InputField
        label="Прізвище"
        name="lastName"
        type="text"
        id={formId.lastName}
        placeholder="Прізвище"
        wrapperClassName={s.inputWrapper}
        invalidClassName={s.invalid}
      />
      <InputField
        label="Телефон"
        name="number"
        type="tel"
        id={formId.number}
        placeholder="+ 380"
        wrapperClassName={s.inputWrapper}
        invalidClassName={s.invalid}
      />
    </div>
  );
};

export default ContactForm;
