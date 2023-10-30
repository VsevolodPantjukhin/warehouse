import React from 'react';
import SubpageLogo from '../../misc/basketball.png';
import './Subpage.css';

const Subpage = ({ title }) => {
  return (
    <div className="subpage">
      <img className="subpage-logo" src={SubpageLogo} alt="" />
      <div className="subpage-title">{title}</div>
    </div>
  );
};
export default Subpage;
