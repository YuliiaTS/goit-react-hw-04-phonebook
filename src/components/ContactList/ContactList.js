import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import style from '../ContactList/ContactList.module.css';

export default function ContactList({ phoneContacts, deleteContact }) {
   return (
      <ul className={style.list}>
         {phoneContacts.map(({id, name, number }) => (
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               deleteContact={deleteContact}
            />
         ))}
      </ul>
   );
};

ContactList.propTypes = {
   phoneContacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      })
   ),
   deleteContact: PropTypes.func.isRequired,
};