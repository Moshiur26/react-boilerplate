import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from '../../auth/auth-helper'
// import {Link, withRouter} from 'react-router-dom'
import {Routes, Link, Navigate, useLocation } from 'react-router-dom';


const isActive = (history, path) => {
  // if (history.location.pathname == path)
  //   return {color: '#ff4081'}
  // else
    return {color: '#ffffff'}
}

export default function Menu() {
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          React Skeleton
        </Typography>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive('path_name', "/")}>
            <HomeIcon/>
          </IconButton>
        </Link>
        <Link to="/users">
          <Button style={isActive('path_name', "/users")}>Users</Button>
        </Link>
        {
          !auth.isAuthenticated() && (<span>
            <Link to="/signup">
              <Button style={isActive('path_name', "/signup")}>Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive('path_name', "/signin")}>Sign In
              </Button>
            </Link>
          </span>)
        }
        {
          auth.isAuthenticated() && (<span>
            {/* <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button style={isActive('path_name', "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
            </Link> */}
            <Button color="inherit" onClick={() => {
                // auth.clearJWT(() => history.push('/'))
                auth.clearJWT(() => '')
              }}>Sign out</Button>
          </span>)
        }
      </Toolbar>
  </AppBar>
  )    
};
