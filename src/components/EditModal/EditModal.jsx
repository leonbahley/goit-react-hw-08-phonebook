import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { editContact } from 'redux/contacts/operations';

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

export default function EditModal({ id, closeModal }) {
  // const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  console.log('id))))))))))))))', id);
  const handleEdit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      editContact({
        name: data.get('name'),
        number: data.get('number'),
        contactId: id,
      })
    );
    // handleClose();
  };

  return (
    <div
      id="backdrop"
      style={{
        backgroundColor: 'rgba(25, 25, 25, 0.5)',
        position: 'fixed',
        inset: 0,
      }}
      onClick={closeModal}
    >
      <Box sx={style}>
        <Box
          onSubmit={handleEdit}
          component="form"
          // sx={{
          //   '& > :not(style)': { m: 1, width: '25ch' },
          // }}
          noValidate
          autoComplete="off"
        >
          <TextField fullWidth name="name" id="outlined-name" label="Name" />
          <TextField
            margin="normal"
            type="tel"
            name="number"
            id="outlined-name"
            label="Number"
            fullWidth
          />

          <Button
            sx={{
              minHeight: '56px',
              display: 'block',
              ml: 'auto',
              mr: 'auto',
            }}
            type="submit"
            variant="contained"
          >
            Edit contact
          </Button>
        </Box>
      </Box>
    </div>
  );
}
