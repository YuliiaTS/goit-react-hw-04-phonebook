import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from '../ContactForm/ContactForm.module.css';
const { Component } = require('react');

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
        name,
        number,
        id: String(nanoid(10)),
    };
    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor={this.nameInputId} className={style.label}>
          Name
          <input
            onChange={this.onChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId} className={style.label}>
          Number
          <input
            onChange={this.onChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
        </label>
        <button className={style.addBtn} type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propType = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};