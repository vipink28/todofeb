import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn]= useState();

    const checkUserState = ()=>{
        const user = localStorage.getItem("user");
        if (user === "undefined" || !user) {
          const userObj = JSON.parse(user);
          setIsLoggedIn(false);
          return navigate("/");
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkUserState();
    }, [isLoggedIn]);

    return (        
        <>
          {
                isLoggedIn ? children : null
            }
        </>
    );
}

export default ProtectedRoute;