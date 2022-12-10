import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

function Form() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  // const onhandleSubmit = e => {
  //   e.preventDefault();
  //   if (contacts.length) {
  //     contacts.some(item => item.name === name)
  //       ? alert(`${name} is already in contacts`)
  //       : dispatch(addContact({ name, number }));
  //   } else {
  //     dispatch(addContact({ name, number }));
  //   }
  //   reset();
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      addContact({
        name: data.get('name'),
        number: data.get('number'),
      })
    );
    // dispatch(
    //   logIn({
    //     email: data.get('email'),
    //     password: data.get('password'),
    //   })
    // );
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
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
