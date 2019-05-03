
import React, { Component } from 'react'
import {Box,Text,Heading,Image} from 'gestalt'
import {NavLink} from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
    <Box
       height={70}
       color="midnight"
       padding={1}
       shape="roundedBottom"
       display="flex"
    justifyContent ="around"
    alignItems="center"
    >
      { /* The sign up link */}
        <NavLink activeClassName="active" to="/signup"  >
            <Text size="xl" color="white" > SignUp</Text>
        </NavLink>

      { /* The logo and title */}
        <NavLink activeClassName="active" exact to="/" >
            <Box display="flex" alignItems="center">
                <Box width={50} height={50}>
                     <Image 
                        naturalHeight={1}
                        naturalWidth={1}
                        src="./icons/logo.svg" 
                        alt="free bear logo"
                    />
                        
                </Box>     
                <Heading size="xs" color="orange" >
                   FreeBeer
                </Heading>
            </Box>
        </NavLink>        
        
        { /* The sign up link */}
        <NavLink activeClassName="active" to="/signin"  >
            <Text size="xl" color="white" > SignIn</Text>
        </NavLink>

    </Box>
    )
  }
}

export default Navbar
