
import React, { Component } from 'react'
import {Box,Text,Heading,Image, Button} from 'gestalt'
import {NavLink, withRouter} from "react-router-dom"
import {getToken, ClearCart, ClearToken} from '../utils'

class Navbar extends Component {
  handleSignOut =  () =>{
  ClearCart()
  ClearToken()
  this.props.history.push("/")
  }
  render(){
   return getToken() !== null ? <AuthNavbar handleSignOut = {this.handleSignOut}/> : <UnAuthNavbar/>
  }
}

const AuthNavbar = ({handleSignOut })=> (
  
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
      <NavLink activeClassName="active" to="/checkout"  >
          <Text size="xl" color="white" > Checkout</Text>
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
              <Heading size="xs" color="white" >
                 FreeBeer
              </Heading>
          </Box>
      </NavLink>        
      
      { /* The sign up link */}
      <Button  onClick={handleSignOut} text="Signout" size="md" inline  color="transparent"/>
  </Box>
  )

const UnAuthNavbar = ()=> (
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
                <Heading size="xs" color="white" >
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

export default  withRouter(Navbar)
