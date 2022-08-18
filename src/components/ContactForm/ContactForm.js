import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from '../ContactForm/ContactForm.module.css';

const state = {
  name: '',
  number: '',
};

export default function ContactForm({onSubmit}) {
  const [{ name, number }, setState] = useState(state);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

const onSubmitForm = e => {
  e.preventDefault();
  const newContact = {
     id: nanoid(5),
     name,
     number,
  };
  onSubmit(newContact);
  setState(state);
  reset();
}

const reset = () => {
  setState({ name: '', number: '' });
}

const onChangeInput = e => {
  const { name, value } = e.target;
  setState(prev => ({ ...prev, [name]: value }));
}

return (
  <form onSubmit={onSubmitForm}>
    <label htmlFor={nameInputId} className={style.label}>
      Name
      <input
        onChange={onChangeInput}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        // placeholder='full name'
        required
        id={nameInputId}
      />
    </label>
    <label htmlFor={numberInputId} className={style.label}>
      Number
      <input
        onChange={onChangeInput}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        // placeholder='xxx-xx-xx'
        required
        id={numberInputId}
      />
    </label>
    <button className={style.addBtn} type="submit">Add contact</button>
  </form>
);
}

ContactForm.propType = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};