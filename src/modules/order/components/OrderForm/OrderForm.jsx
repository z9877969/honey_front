import { Formik, Form } from 'formik';
import {
  contactFormValidationSchema,
  orderFormInitialValues,
} from 'modules/order/data';
import { Button } from 'shared/components';
import { ContactForm, AddressForm } from 'modules/order/components';
import s from './OrderForm.module.scss';
import { useModal } from 'hooks/useModal';
import { useCallback } from 'react';

const OrderForm = () => {
  const setModal = useModal();
  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const handleSubmit = (values, actions) => {
    closeModal();
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={orderFormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidationSchema}
    >
      {({ setFieldValue, setFieldTouched, values }) => (
        <Form className={s.orderForm}>
          <ContactForm />
          <AddressForm
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            values={values}
          />
          <p className={s.userAgreement}>
            Підтверджуючи замовлення, ви даєте згоду на обробку своїх
            персональних даних відповідно до Закону України «Про захист
            персональних даних»
          </p>
          <Button
            type="submit"
            title="Оформити замовлення"
            className={s.orderButton}
          />
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
