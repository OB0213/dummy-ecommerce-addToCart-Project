import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected({Component}) {
    const navigate=useNavigate();
    

    useEffect(()=>{
        let user=localStorage.getItem('user');
        if(!user)
        {
            navigate('/login');
        }

        
      

    })
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected
