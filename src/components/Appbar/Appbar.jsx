import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

export default function Appbar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static" sx={{ minHeight: 56 }}>
      {isLoggedIn ? (
        <Container maxWidth="xl">
          <>
            <UserMenu />
          </>
        </Container>
      ) : (
        <Container maxWidth="xl">
          <Navigation />
        </Container>
      )}
    </AppBar>
  );
}
