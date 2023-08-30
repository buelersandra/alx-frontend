import React from 'react';
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JokeSection from './joke';
import AnimeSection from './anime';

function Home() {
  const [token, setToken] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("token");
    // const initialValue = JSON.parse(saved);
    return saved || "";
  });

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    
  };

  if (!token) {
    return <Navigate replace to="/account" />;
  } else {

    return (
      <div className='container'>
        <div className='row'>
          <button onClick={logout}>Logout user</button>
        </div>
        <div className='row'>
        <div className='col'>
        <JokeSection />
       </div>
       <div className='col'>
       <AnimeSection/>
       </div>
       </div>
        
       
        
      </div>
      

    );
  }
};

export default Home