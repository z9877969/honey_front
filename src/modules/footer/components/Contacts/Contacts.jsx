import s from './Contacts.module.scss';

const Contacts = () => {
  return (
    <ul className={s.contacts}>
      <li>
        <a href="mailto:plokhaanastasiia@gmail.com">
          plokhaanastasiia@gmail.com
        </a>
      </li>
      <li>
        <a href="tel:+380968880739">+38 096 888 07 39</a>
      </li>
    </ul>
  );
};

export default Contacts;
