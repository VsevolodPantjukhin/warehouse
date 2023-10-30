import React from 'react';
import LettersHeader from '../LettersHeader/LettersHeader';
import Fields from '../Fields/Fields';
import Letter from '../Letter/Letter';
import avatar from '../../misc/avatar.png';

const Letters = () => {
  const letters = [
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: 'Admin',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: 'supervisor',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: '',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: '',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: '',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: '',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: '',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: '',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: '',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
    {
      avatar: avatar,
      name: 'Anton Kuzmenko',
      email: 'compradon@icloud.com',
      label: '',
      type: 'User',
      usernameOrScope: 'compradon@icloud.com',
    },
  ];
  const renderedLetters = letters.map((letter) => {
    return (
      <Letter
        key={letter.name}
        avatar={letter.avatar}
        name={letter.name}
        email={letter.email}
        label={letter.label}
        type={letter.type}
        usernameOrScope={letter.usernameOrScope}
      />
    );
  });
  return (
    <div>
      <LettersHeader />
      <Fields />
      {renderedLetters}
    </div>
  );
};
export default Letters;
