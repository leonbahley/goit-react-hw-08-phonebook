import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

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
