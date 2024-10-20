import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout,isAuthenticated,isLoading } = useAuth0();
  const navigate = useNavigate()
  if(isLoading) 
    return <h1>Redirecting...</h1>
    if(!isAuthenticated) {
        navigate('/login')
    } 
  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;