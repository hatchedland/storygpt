'use client'
import { useEffect, useState } from 'react';
import Login from './login/layout';
import Register from './register/layout';
import { checkUserRegistration } from './auth';


const Auth = () => {
    const [isUserRegistered, setIsUserRegistered] = useState(false);

    useEffect(() => {

        const isUserRegistered = checkUserRegistration();
        setIsUserRegistered(isUserRegistered);
      }, []);


  return (
    <div className="flex items-center justify-center">
      {isUserRegistered ? <Login /> : <Register />}
    </div>
  )
}

export default Auth;