import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import * as React from 'react';
import { useAuth } from 'hooks/useAuth';

export default function Navigation() {
  const { isLoggenIn } = useAuth();

  return (
    <Box component="div" sx={{ p: 2, display: 'flex', gap: 3 }}>
      <Link underline="none" color="#fff" component={RouterLink} to="/login">
        Login
      </Link>
      <Link underline="none" color="#fff" component={RouterLink} to="/register">
        Register
      </Link>
      {isLoggenIn && (
        <Link
          underline="none"
          color="#fff"
          component={RouterLink}
          to="/contacts"
        >
          Contacts
        </Link>
      )}
    </Box>
  );
}
