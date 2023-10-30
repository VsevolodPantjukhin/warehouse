import React from 'react';
import SideMenu from '../components/SideMenu/SideMenu';
import MainBlock from '../components/MainBlock/MainBlock';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <SideMenu />
      <MainBlock />
    </div>
  );
};
export default App;
