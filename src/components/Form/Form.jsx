import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

function Form() {
  const dispatch = useDispatch();
  let nameInputId = nanoid();
  let telInputId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const onhandleSubmit = e => {
    e.preventDefault();
    if (contacts.length) {
      contacts.some(item => item.name === name)
        ? alert(`${name} is already in contacts`)
        : dispatch(addContact({ name, number }));
    } else {
      dispatch(addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.Form} onSubmit={onhandleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        className={css.FormInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameInputId}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor={telInputId}>Number</label>
      <input
        className={css.FormInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={telInputId}
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button className={css.AddBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
