import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignUp from './components/signup';
import SignIn from './components/signin';
import CheckOut from './components/checkout';
import Brew from './components/brew';
import NavBar from './components/navbar';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {getToken} from './utils'
import "gestalt/dist/gestalt.css"

const  PrivateRoute = ({component :Component , ...rest}) =>(
      <Route {...rest}  render ={ props=> (
         getToken()!== null ? <Component {...props}/> : <Redirect to={{
             pathname :"/signin",
            state:{ from :props.location}

        }} />
      )} />
)


const  PublicRoute = ({component :Component , ...rest}) =>(
    <Route {...rest}  render ={ props=> (
       getToken()!== null ? <Redirect to={{
           pathname :"/",
          state:{ from :props.location}

      }} /> :  <Component {...props}/> 
    )} />
)
 const Root = () => {
  return (
     <Router >
        <React.Fragment >
            <NavBar />
                <Switch>
                    <Route component ={App} exact path= "/"/>
                    <PublicRoute component ={SignIn}  path= "/signin"/>
                    <PublicRoute component ={SignUp}  path= "/signup"/>
                    <PrivateRoute component ={CheckOut}  path= "/checkout"/>
                    <Route component={Brew}   path="/:brandId"/>
                </Switch>
        </React.Fragment>
     </Router>
  )
}



ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
