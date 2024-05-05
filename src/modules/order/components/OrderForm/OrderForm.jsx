import { Formik, Form } from 'formik';
// import { useSelector } from 'react-redux';
// import { selectProducts } from '@redux/cart/cartSlice';
// import { createOrderList } from 'modules/order/helpers';
// import { createTgMessage } from 'helpers/createTgMessage';
import {
  contactFormValidationSchema,
  orderFormInitialValues,
} from 'modules/order/data';
import { Button } from 'shared/components';
import { ContactForm, AddressForm } from 'modules/order/components';
import ThanksForOrder from 'modules/cart/components/ThanksForOrder/ThanksForOrder';
import { useModal } from 'hooks/useModal';
import s from './OrderForm.module.scss';

const OrderForm = ({ onClose }) => {
  const setModal = useModal();
  // const productList = useSelector(selectProducts);

  const handleSubmit = (values, actions) => {
    // const { order, totalPrice } = createOrderList(productList);
    // const tgMessage = createTgMessage(values, order, totalPrice);
    // console.log(tgMessage);
    onClose();
    actions.resetForm();
    setModal(<ThanksForOrder handleClose={onClose} />);
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
