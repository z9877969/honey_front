import clsx from 'clsx';
import s from './OrderTitle.module.scss';

const OrderTitle = ({ children, className }) => {
  return (
    <h3 className={clsx(s.orderTitle, className && className)}>{children}</h3>
  );
};

export default OrderTitle;
