import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
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
              <Route path="/" element={<Layout />} />
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
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
