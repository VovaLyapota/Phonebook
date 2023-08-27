import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import './NotifyOptions';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { SharedLayout } from './SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Oval
      height={50}
      width={50}
      color="#111"
      wrapperClass=""
      secondaryColor="#114"
      margin="0 auto"
    />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/contacts" />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute component={<Register />} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
