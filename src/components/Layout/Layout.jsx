import React from 'react';
import AppBar from 'components/Appbar/Appbar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@mui/material/Container';

export default function Layout() {
  return (
    <Suspense fallback={null}>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Suspense>
  );
}
