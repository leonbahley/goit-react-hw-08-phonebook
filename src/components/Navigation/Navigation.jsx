import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

export default function Navigation() {
  return (
    <Box component="div" sx={{ p: 2, display: 'flex', gap: 3 }}>
      <Link underline="none" color="#fff" component={RouterLink} to="/login">
        Login
      </Link>
      <Link underline="none" color="#fff" component={RouterLink} to="/register">
        Register
      </Link>
      <Link underline="none" color="#fff" component={RouterLink} to="/contacts">
        Contacts
      </Link>
    </Box>
  );
}
