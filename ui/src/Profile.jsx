import React from 'react';
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
    const [ userMetadata, setUserMetadata ] = useState(null);
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        <div className='profile-container'>
        </div>
      );
}

export default Profile