import React from 'react';
import './Header.scss';

const Header = (props) => {
  const { header, handleAddClick } = props;

  return (
    <div className="header">
      <h1 className="header-title">{header}</h1>
      <button className="add" onClick={handleAddClick}>+ NEW TASK</button>
    </div>
  )
};

export default Header;