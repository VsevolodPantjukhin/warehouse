import React from 'react';

const Letter = ({ avatar, name, email, label, type, usernameOrScope }) => {
  return (
    <div>
      <img src={avatar} alt="" />;
      <div>
        {name} <br />
        {email}
      </div>
      {label}
      <div>{type}</div>
      <div>{usernameOrScope}</div>
    </div>
  );
};
export default Letter;
