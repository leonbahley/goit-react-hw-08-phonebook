import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import { getContactsToRender } from 'redux/contacts/selectors';
import Filter from 'components/Filter/Filter';
import { deleteContact } from 'redux/contacts/operations';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Form from 'components/Form/Form';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditModal from 'components/EditModal/EditModal';
import LinearColor from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsToRender);
  const loading = useSelector(getIsLoading);
  const [modalCredentials, setModalCredentials] = React.useState({
    name: '',
    number: '',
  });
  const [modalOpen, setModalOpen] = React.useState(false);
  const [idToEdit, setIdToEdit] = React.useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleEditClick = (id, name, number) => {
    setModalOpen(true);
    setIdToEdit(id);
    setModalCredentials({ name, number });
  };

  const handleModalClose = ({ target: { id } }) => {
    if (id === 'backdrop') {
      setModalOpen(false);
    }
  };

  const handleModalCloseOnSubmit = () => {
    setModalOpen(false);
  };

  return (
    <Container sx={{ mt: 2 }} maxWidth="xl">
      <Form />
      <Filter />
      {loading && <LinearColor />}
      <List>
        {contacts.map(({ name, number, id }) => (
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #000',
            }}
            key={id}
          >
            <ContactPhoneIcon fontSize="large" sx={{ mr: 1 }} />
            <p>
              {name} {number}
            </p>
            <IconButton
              onClick={() => handleDelete(id)}
              sx={{ ml: 'auto' }}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ ml: 2 }}
              edge="end"
              aria-label="delete"
              onClick={() => handleEditClick(id, name, number)}
            >
              <ModeEditIcon fontSize="large" />
            </IconButton>
          </ListItem>
        ))}
      </List>
      {modalOpen && (
        <EditModal
          modalInfo={modalCredentials}
          closeModal={handleModalClose}
          id={idToEdit}
          closeModalOnSubmit={handleModalCloseOnSubmit}
        />
      )}
    </Container>
  );
}
