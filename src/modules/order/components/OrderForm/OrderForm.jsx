import { Formik, Form } from 'formik';
import {
  contactFormValidationSchema,
  orderFormInitialValues,
} from 'modules/order/data';
// import { createTgMessage } from 'helpers/createTgMessage';
import { Button } from 'shared/components';
import { ContactForm, AddressForm } from 'modules/order/components';
import s from './OrderForm.module.scss';
// import { useSelector } from 'react-redux';
// import { selectProducts } from '@redux/cart/cartSlice';
// import { createOrderList } from 'modules/order/helpers';

const OrderForm = ({ onClose }) => {
  // const productList = useSelector(selectProducts);

  const handleSubmit = (values, actions) => {
    // const { order, totalPrice } = createOrderList(productList);
    // const tgMessage = createTgMessage(values, order, totalPrice);
    // console.log(tgMessage);
    onClose();
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
