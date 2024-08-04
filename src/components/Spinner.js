import React from 'react';
import loader from './loader.gif';

export default function Spinner() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height:"400px"}}>
        <img src={loader} alt="loader" style={{width:"150px", height:"100px"}} />
      </div>
    )
  
}
