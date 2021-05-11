import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';


export default function ProtectedRoutes({component: Component, ...rest}) {
  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);

  return (
    <Route {...rest} render={(props) => {
     const token = cookies;
      if (token) {
        return <Component {...props} />;
      } else {
        return (
          <Redirect
          to={{
            pathname: "/",
            state: {
              from: props.location,
            }
          }}
          />
        )
      }
    }}
    />
  );
}
