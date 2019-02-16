import React from 'react';

const User = (props) => {
  const { id, firstname, selected } = props;
  if (selected === true) {
    return (
      <option value={id} selected="selected">{firstname}</option>
    );
  } else {
    return (
      <option value={id}>{firstname}</option>
    );
  }
};

export default User;