import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
  const { user,admin, loading } = useAuth();
    if (loading) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email &&admin ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;