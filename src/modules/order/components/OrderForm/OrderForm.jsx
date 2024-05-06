import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectProducts,
  selectTotalPrice,
  removeAllProducts,
} from '@redux/cart/cartSlice';
import { createOrderList } from 'modules/order/helpers';
import {
  contactFormValidationSchema,
  orderFormInitialValues,
} from 'modules/order/data';
import { Button } from 'shared/components';
import { ContactForm, AddressForm } from 'modules/order/components';
import ThanksForOrder from 'modules/cart/components/ThanksForOrder/ThanksForOrder';
import { useModal } from 'hooks/useModal';
import { sendMessageTg } from 'services/tgApi';
import { toastify } from 'helpers/tostify';
import s from './OrderForm.module.scss';

const OrderForm = ({ onClose }) => {
  const setModal = useModal();
  const dispatch = useDispatch();
  const productList = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);

  const handleSubmit = async (values, actions) => {
    const order = createOrderList(productList);
    const message = { values, order, totalPrice };
    onClose();
    try {
      const result = await sendMessageTg(message);
      setModal(<ThanksForOrder handleClose={onClose} />);
      dispatch(removeAllProducts());
      actions.resetForm();
      return result;
    } catch (error) {
      toastify.error(
        'При оформленні замовлення виникла помилка. Будь ласка, спробуйте ще раз'
      );
    }
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
