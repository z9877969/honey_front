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
import s from './OrderForm.module.scss';
// **********************************************
// Added By Nazar Dia for applying Thanks 4 Order Pop-Up
import { useModal } from 'hooks/useModal';
import ThanksForOrder from 'modules/cart/components/ThanksForOrder/ThanksForOrder';
import { useState } from 'react';
// **********************************************

const OrderForm = ({ onClose }) => {
  // **********************************************
  // Added By Nazar Dia for applying Thanks 4 Order Pop-Up
  const [isError, setIsError] = useState(false);
  const setModal = useModal();
  // **********************************************
  // const productList = useSelector(selectProducts);

  // **********************************************
  // Commented fn handleSubmit & created below the new one by N.Dia

  // const handleSubmit = (values, actions) => {
  //   // const { order, totalPrice } = createOrderList(productList);
  //   // const tgMessage = createTgMessage(values, order, totalPrice);
  //   // console.log(tgMessage);
  //   onClose();
  //   actions.resetForm();
  // };

  // **********************************************

  // **********************************************
  // Added By Nazar Dia for applying Thanks 4 Order Pop-Up
  const handleSubmit = async (values, actions) => {
    try {
      setModal(<ThanksForOrder handleClose={onClose} />);
      actions.resetForm();
    } catch (error) {
      setIsError(true);
    }
  };
  // **********************************************

  return (
    <Formik
      initialValues={orderFormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidationSchema}
    >
      {({ setFieldValue, setFieldTouched, values }) => (
        <Form className={s.orderForm}>
          {/* // **********************************************
  // Added By Nazar Dia for applying Thanks 4 Order Pop-Up */}
          {isError && <p className={s.error}>Ошибка при отправке формы</p>}
          {/* // ********************************************** */}
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
