import { Suspense } from 'react';
import { useAuth } from 'hooks/useAuth';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Appbar from './Appbar/Appbar';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { getError } from 'redux/contacts/selectors';
import LinearColor from './Loader/Loader';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const RegisterForm = lazy(() => import('pages/RegisterForm/Registerform'));
const LoginForm = lazy(() => import('pages/LoginForm/LoginForm'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {error && <b>{error}</b>}
      {isRefreshing ? (
        <LinearColor />
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
              <Route
                path="*"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginForm />}
                  />
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
