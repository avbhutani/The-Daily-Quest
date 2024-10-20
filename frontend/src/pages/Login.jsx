import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const {user,isAuthenticated,isLoading} = useAuth0();
  const navigate = useNavigate()

  if(isLoading)
    return <h1>Redirecting...</h1>

  if(user || isAuthenticated) 
    navigate('/')

  return (
  <>
  <Header />
  <button onClick={() => loginWithRedirect()}>Log In</button>
  </>
);
}
export default Login;