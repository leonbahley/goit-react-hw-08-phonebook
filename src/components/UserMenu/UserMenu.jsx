import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser).name;
  return (
    <div>
      <p>{userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
