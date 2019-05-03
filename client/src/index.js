import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignUp from './components/signup';
import SignIn from './components/signin';
import CheckOut from './components/checkout';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {} from "./components/signin"



 const Root = () => {
  return (
     <Router >
         <Switch>
              <Route component ={App} exact path= "/"/>
              <Route component ={SignIn}  path= "/signin"/>
              <Route component ={SignUp}  path= "/signup"/>
              <Route component ={CheckOut}  path= "/checkout"/>
         </Switch>
     </Router>
  )
}



ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
