import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate()

  useEffect(()=> {
    console.log(user)
  },[user])

  if(isLoading) {
    return <h1>Loading...</h1>;
  }
  
  if(!isAuthenticated) {
    navigate('/login')
  }
  return (
      <>
        <Header />
        <h1>{user.name}</h1>
        <img src={user.picture} alt="" />
      </>
    )
}

export default HomePage
