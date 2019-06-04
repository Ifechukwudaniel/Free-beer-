import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import ToastMessage from './toastMessage'

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    toast : false,
    toastMessage: ""
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = event  =>{
     event.preventDefault()
      if (this.isFormEmpty(this.state)) {
       this.showToast("Fill all  the fields")
      }
  }

  isFormEmpty =({username, email, password} )=>{
     return !username || !email || !password
  }
  
  showToast= toastmsg =>{
    this.setState({ toast : true,})
    this.setState({ toastMessage : toastmsg})
    setTimeout(()=> {this.setState({ toast : false,toastMessage : ""}) }, 5000)
  }
  render() {
    const {toast , toastMessage} = this.state
    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#ebe2da"
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
            {/* Sign Up Form Heading */}
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
            {/* Email Address Input */}
            <Box marginTop= {4}>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
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
               <Button inline color="blue" text="Submit" type="submit" />
            </Box>
          </form>
        </Box>
        <ToastMessage toast={toast}  massage = {toastMessage}/>
      </Container>
    );
  }
}

export default Signup;
