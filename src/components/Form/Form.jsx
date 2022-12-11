import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { getContacts } from 'redux/contacts/selectors';

function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.get('name').toLowerCase()
      )
    ) {
      alert(`${data.get('name')} is already in your contacts list`);
      return;
    }
    dispatch(
      addContact({
        name: data.get('name'),
        number: data.get('number'),
      })
    );
    event.currentTarget.reset();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{ display: 'flex', gap: 2, mb: 1 }}
      validate="true"
      autoComplete="off"
    >
      <TextField required name="name" id="outlined-name" label="Name" />
      <TextField
        required
        type="tel"
        name="number"
        id="outlined-name"
        label="Number"
      />

      <Button sx={{ minHeight: '56px' }} type="submit" variant="contained">
        Add contact
      </Button>
    </Box>
  );
}

export default Form;
