import React from 'react';
import user from './UserContext';
const loggedUser = {
    "name" : "issarali",
    "password" : "123456"
}
function CheckUserContext({children}) {
    return ( 
        <user.Provider value={loggedUser}>
            {children}
        </user.Provider>
     );
}

export default CheckUserContext;
