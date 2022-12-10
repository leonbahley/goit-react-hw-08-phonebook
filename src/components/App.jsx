import Filter from './Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Container from '@mui/material/Container';
import { Suspense } from 'react';
import { useAuth } from 'hooks/useAuth';
import { lazy } from 'react';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

import Appbar from './Appbar/Appbar';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// const Form = lazy(() => import('components/Form/Form'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const RegisterForm = lazy(() => import('pages/RegisterForm/Registerform'));
const LoginForm = lazy(() => import('pages/LoginForm/LoginForm'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user</b>
      ) : (
        <>
          <Appbar />
          <Suspense fallback={null}>
            <Routes>
              <Route
                path="/"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginForm />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterForm />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginForm />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
              {/* </Route> */}
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
