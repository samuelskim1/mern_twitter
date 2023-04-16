import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Component } from 'react';


//keeps a user from visiting the login or signup page if they are already logged in.
//takes in a component and route information
//return a Route to the component if no one is logged in and a Route to the tweets index otherwise.
export const AuthRoute = ({ component: Component, path, exact }) => {
    const loggedIn = useSelector(state => !!state.session.user);
    
    return (
        <Route path={path} exact={exact} render={(props) => {
            !loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/tweets" />
            )
        }} />
    );
};


//ensure that users can only access certain routes/information if they are logged in. 
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector(state => !!state.session.user);

  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};