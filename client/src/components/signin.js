import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import ToastMessage from './toastMessage'
import {setToken} from "../utils"
import  Stripi  from "strapi-sdk-javascript/build/main"
const Api_Url = process.env.API_URL || 'http://localhost:1337/'
const strapi = new Stripi(Api_Url)

class Signin extends React.Component {
  state = {
    username: "",
    password: "",
    toast : false,
    toastMessage: "",
    loading:false
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

   handleSubmit = async event  =>{
     event.preventDefault()
     const { username ,password } = this.state
      if (this.isFormEmpty(this.state)) {
       this.showToast("Fill all  the fields")
      }


      try {
        // change loading state 
         this.setState({ loading: true})
         // send register the user
        const response =  await strapi.login( username, password)
        //change loading  state
        this.setState({ loading:  false})
        // redirect the user 
         this.redirect('/')

        setToken(response.jwt)

      } catch (error) {
        //change loding state
        this.setState({ loading:  false})
        //show error as toast
        this.showToast(error.message)
        
      }
  
  }

  isFormEmpty =({username, password} )=>{
     return !username || !password
  }

  showToast= toastmsg =>{
    this.setState({ toast : true,})
    this.setState({ toastMessage : toastmsg})
    setTimeout(()=> {this.setState({ toast : false,toastMessage : ""}) }, 5000)
  }

  redirect =(link) => this.props.history.push(link)

  render() {
    const {toast , toastMessage, loading} = this.state
    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#d682b1"
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign Up Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
            onSubmit = { this.handleSubmit}
          >
            {/* Sign In Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Let's Get Started</Heading>
              <Text italic color="orchid">
                Sign up to order some brews!
              </Text>
            </Box>
            {/* Username Input */}
            <Box>
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            </Box>
            {/* Password Input */}
            <Box marginTop={4}>
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            </Box>
            <Box marginTop={4}>
               <Button disabled={loading} inline color="blue" text="Submit" type="submit" />
            </Box>
          </form>
        </Box>
        <ToastMessage toast={toast}  massage = {toastMessage}/>
      </Container>
    );
  }
}

export default Signin;
