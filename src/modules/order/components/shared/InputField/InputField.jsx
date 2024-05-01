import { useField } from 'formik';
import clsx from 'clsx';

const InputField = ({
  label,
  wrapperClassName,
  invalidClassName,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div
      className={clsx(wrapperClassName, {
        [invalidClassName]: meta.touched && meta.error,
      })}
    >
      <label htmlFor={props.id}>
        {label}
        <span>*</span>
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  );
};

export default InputField;
