import React from 'react';

import {  useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {Navigate} from 'react-router-dom'



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <h1>loading</h1> }
    
	
    if (!user.email) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }}  />;
      }
    
      return children;

	
  
    
};

export default PrivateRoute;