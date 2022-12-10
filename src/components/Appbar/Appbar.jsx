import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

export default function Appbar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Link to="/contacts">Contacts</Link>
          <UserMenu />
        </>
      ) : (
        <Navigation />
      )}
    </div>
  );
}
