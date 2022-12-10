import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '@mui/material';
import { fetchContacts } from 'redux/contacts/operations';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import { getContacts } from 'redux/contacts/selectors';
import { editContact } from 'redux/contacts/operations';
import { deleteContact } from 'redux/contacts/operations';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Form from 'components/Form/Form';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditModal from 'components/EditModal/EditModal';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

// export default function InteractiveList() {
//   const [dense, setDense] = React.useState(false);
//   const [secondary, setSecondary] = React.useState(false);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log('contacts', contacts);
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [idToEdit, setIdToEdit] = React.useState('');

  //   function generate(element) {
  //     return contacts.map(value => {
  //       console.log('value', value);
  //       return React.cloneElement(element, {
  //         key: value,
  //       });
  //     });
  //   }
  //   const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleEdit = event => {
    console.log('idToEdit////////////', idToEdit);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      editContact({
        name: data.get('name'),
        number: data.get('number'),
        contactId: idToEdit,
      })
    );
    handleClose();
  };
  const handleEditClick = id => {
    handleOpen();
    setIdToEdit(id);
  };

  return (
    <Container sx={{ mt: 2 }} maxWidth="xl">
      <Form />
      <List>
        {contacts.map(({ name, number, id }) => (
          <ListItem sx={{ display: 'flex', alignItems: 'center' }} key={id}>
            <ContactPhoneIcon sx={{ mr: 1 }} />
            <p>
              {name} {number}
            </p>
            <IconButton
              onClick={() => handleDelete(id)}
              sx={{ ml: 2 }}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              sx={{ ml: 2 }}
              edge="end"
              aria-label="delete"
              onClick={() => handleEditClick(id)}
            >
              <ModeEditIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            onSubmit={handleEdit}
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField name="name" id="outlined-name" label="Name" />
            <TextField
              margin="normal"
              type="tel"
              name="number"
              id="outlined-name"
              label="Number"
            />

            <Button
              sx={{ minHeight: '56px' }}
              type="submit"
              variant="contained"
            >
              Edit contact
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
