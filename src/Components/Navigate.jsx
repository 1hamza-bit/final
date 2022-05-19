import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigate() {

    let navigate = useNavigate();

    React.useEffect(() => {
      navigate('/');
    }, [])
    
  return (null)
}

export default Navigate