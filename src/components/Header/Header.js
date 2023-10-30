import React from 'react';
import avatar from '../../misc/avatar.png';
import './Header.css';

const Header = () => {
  const notifications = (
    <svg
      className="header-bell-icon"
      width="49"
      height="33"
      viewBox="0 0 49 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.796875"
        y="0.839355"
        width="48"
        height="32"
        rx="16"
        transform="rotate(-0.0237858 0.796875 0.839355)"
        fill="#52ABFD"
        fill-opacity="0.1"
      />
      <path
        d="M21.8054 22.3308L21.8058 23.3308C21.8065 24.9877 23.15 25.8303 24.8069 25.8296C26.4637 25.8289 27.8065 24.9852 27.8058 23.3284L27.8054 22.3284M18.8017 13.3321C18.8003 10.0184 21.4859 8.33098 24.7996 8.32961C28.1133 8.32823 30.8003 10.0134 30.8017 13.3271C30.8025 15.2663 31.5085 17.4402 32.2357 19.1654C32.8395 20.598 31.8276 22.3267 30.273 22.3273L19.3378 22.3319C17.7832 22.3325 16.7699 20.6046 17.3725 19.1716C18.0983 17.4457 18.8025 15.2713 18.8017 13.3321Z"
        stroke="#52ABFD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="29.8005"
        cy="9.8272"
        r="4"
        transform="rotate(-0.0237858 29.8005 9.8272)"
        fill="#F74F4E"
      />
    </svg>
  );

  return (
    <div className="header">
      <div className="header-total-amount">
        <div className="header-total">Всего</div>
        <div className="header-total-number-block">
          <span className="header-total-number">13</span>
        </div>
      </div>
      <input
        className="header-search-input"
        placeholder="Поиск по юзерам и группам"
      />
      <div className="header-right-group">
        <button className="header-notifications">{notifications}</button>
        <div>
          <img src={avatar} alt="" />
          Anton Kuzmenko compradon@icloud.com
        </div>
      </div>
    </div>
  );
};
export default Header;
