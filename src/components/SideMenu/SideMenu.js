import React from 'react';
import Pages from '../Pages/Pages';
import Footer from '../Footer/Footer';
import './SideMenu.css';

const SideMenu = () => {
  const logoPic = (
    <svg
      className="warehouse-logo"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.804837 27.4491C0.80392 25.2393 1.23728 23.0509 2.08022 21.009C2.92316 18.967 4.15911 17.1114 5.71757 15.5482C7.27602 13.985 9.12636 12.7447 11.163 11.8982C13.1998 11.0517 15.3829 10.6155 17.5878 10.6146L17.5948 27.4421L0.804837 27.4491Z"
        fill="#442781"
      />
      <path
        d="M0.804688 27.4497C0.805605 29.6596 1.24078 31.8476 2.08541 33.8889C2.93006 35.9301 4.16754 37.7846 5.7273 39.3466C7.28705 40.9085 9.13841 42.1473 11.1758 42.9921C13.2133 43.8369 15.3967 44.2712 17.6017 44.2703L17.5947 27.4427L0.804688 27.4497Z"
        fill="#61459C"
      />
      <path
        d="M34.3844 27.4357C34.3853 29.6455 33.9523 31.8339 33.1095 33.8759C32.2665 35.9178 31.0306 37.7734 29.4719 39.3366C27.9135 40.8998 26.0631 42.1401 24.0263 42.9867C21.9897 43.8332 19.8065 44.2693 17.6017 44.2702L17.5947 27.4426L34.3844 27.4357Z"
        fill="#A992DB"
      />
      <path
        d="M44.7989 12.8934C44.8018 19.8713 39.1598 25.5305 32.1975 25.5334L19.5911 25.5386L19.5858 12.9038C19.5829 5.92585 25.2247 0.2667 32.187 0.26381C39.1493 0.260919 44.796 5.91539 44.7989 12.8934Z"
        fill="#FF7917"
      />
    </svg>
  );
  return (
    <div className="side-menu">
      <div className="logo-block">
        <div className="website-logo">{logoPic}</div>
        <div className="main-title">WareHouse</div>
      </div>
      <Pages />
      <span className="footer-span">
        <Footer />
      </span>
    </div>
  );
};
export default SideMenu;
