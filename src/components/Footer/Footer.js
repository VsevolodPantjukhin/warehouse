import React from 'react';
import help from '../../misc/HelpIcon.png';
import settings from '../../misc/SettingsIcon.png';
import './Footer.css';

const curtailIcon = (
  <svg
    className="curtail-icon"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2041 18.2856L6.20161 12.2881L12.1991 6.2856"
      stroke="#585858"
      stroke-width="2"
    />
    <path
      d="M18.2041 18.2832L12.2016 12.2856L18.1991 6.28315"
      stroke="#585858"
      stroke-width="2"
    />
  </svg>
);
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-curtail">
        {curtailIcon}
        Свернуть экран
      </div>
      <div className="footer-settings">
        <img src={settings} alt="" />
        Настройки
      </div>
      <div className="footer-help">
        <img src={help} alt="" />
        Помощь
      </div>
    </div>
  );
};
export default Footer;
