import React from 'react';

import './Page.css';

const Page = ({ title, logo, subpages }) => {
  const isOnFocus = false;
  return (
    <div className={`page ${isOnFocus}`}>
      <div className="page-logo">{logo}</div>
      <div className="page-title">{title}</div>
    </div>
  );
};
export default Page;
