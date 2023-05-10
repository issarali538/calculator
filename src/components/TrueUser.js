import React, { useContext } from 'react';
import user from './Credentials/UserContext';
function TrueUser() {
    const {name, password} = useContext(user);

    return ( 
        <>
            { (name === "issarali" && password === "123456") ? "True Credentials" : "False Credentials"  }
        </>
     );
}

export default TrueUser;