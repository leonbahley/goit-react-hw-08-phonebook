import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser).name;
  return (
    <div style={{ display: 'flex', gap: 13, alignItems: 'center' }}>
      <p style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <PersonIcon />
        {userName}
      </p>
      <Button
        size="small"
        color="info"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
