import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { deleteContact } from 'redux/contacts/operations';

export default function ClearAllBtn() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const contactsIds = [];
  if (contacts.length !== 0) {
    contacts.forEach(contact => {
      contactsIds.push(contact.id);
    });
  }

  const deleteAll = () => {
    if (contactsIds.length !== 0) {
      contactsIds.forEach(contactId => {
        dispatch(deleteContact(contactId));
      });
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 5 }}>
      <Tooltip title="Delete all contacts">
        <IconButton onClick={deleteAll} edge="end" aria-label="delete">
          <DeleteForeverIcon color="error" fontSize="large" />
        </IconButton>
      </Tooltip>
    </div>
  );
}
