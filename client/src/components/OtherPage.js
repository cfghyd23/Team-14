import React from 'react';
import './style2.css'
import { useNavigate } from 'react-router-dom';
const OtherPage = () => {
    const history = useNavigate();
  const f = () => {
    history('/my-payment');
  };

  return (
    
    <div className="container">
      <h1 className="heading">Welcome to my campaigns</h1>
      <div className="content">
        <h2>Descent work and economic growth</h2>
        <p>Ensure access to affordable, reliable, sustainable, and modern energy for all.</p>
      </div> 
      <div className="content1"></div> 
        <h3>Clean water and sanitization</h3>
        <p>Ensure availability and sustainable management of water and sanitation for all.</p>
        <p className="text"></p>
      <button className="button" onClick={f}>Funding</button>
    </div>
  );
};

export default OtherPage;