import { Formik, Form } from 'formik';
import {
  contactFormValidationSchema,
  orderFormInitialValues,
} from 'modules/order/data';
import { Button } from 'shared/components';
import { ContactForm, AddressForm } from 'modules/order/components';
import s from './OrderForm.module.scss';

const OrderForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={orderFormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidationSchema}
    >
      {({ setFieldValue, values }) => (
        <Form className={s.orderForm}>
          <ContactForm />
          <AddressForm setFieldValue={setFieldValue} values={values} />
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
