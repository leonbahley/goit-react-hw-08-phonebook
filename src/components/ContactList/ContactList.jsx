import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsToRender } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      your contact list
      {/* <ul className={css.List}>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <li className={css.ListItem} id={id} key={id}>
              {name}: {number}
              <button
                className={css.DeleteBtn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul> */}
    </>
  );
};

export default ContactList;
