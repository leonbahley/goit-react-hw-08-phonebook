import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Form() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      addContact({
        name: data.get('name'),
        number: data.get('number'),
      })
    );
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
