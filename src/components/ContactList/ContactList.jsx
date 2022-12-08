import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsToRender } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsToRender);

  return (
    <>
      <ul className={css.List}>
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
      </ul>
    </>
  );
};

export default ContactList;
