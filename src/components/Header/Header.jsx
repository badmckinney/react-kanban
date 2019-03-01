import React from 'react';
import './Header.scss';
import AddCardButton from '../../containers/AddCardButton';
import LoginButton from '../../containers/LoginButton';
import LogoutButton from '../../containers/LogoutButton';

const Header = (props) => {
  const { header, auth, error } = props;

  if (auth) {
    return (
      <div className="header">
        <div className="kanban-tools">
          <h1 className="header-title">{header}</h1>
          <AddCardButton />
        </div>
        <p className="error">{error}</p>
        <LogoutButton />
      </div>
    )
  }

  return (
    <div className="header">
      <div className="kanban-tools">
        <h1 className="header-title">{header}</h1>
      </div>
      <p className="error">{error}</p>
      <LoginButton />
    </div>
  )
};

export default Header;