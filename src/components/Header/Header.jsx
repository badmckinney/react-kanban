import React from 'react';
import './Header.scss';
import AddCardButton from '../../containers/AddCardButton';

const Header = (props) => {
  const { header } = props;

  return (
    <div className="header">
      <h1 className="header-title">{header}</h1>
      <AddCardButton />
    </div>
  )
};

export default Header;