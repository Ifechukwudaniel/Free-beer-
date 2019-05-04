import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignUp from './components/signup';
import SignIn from './components/signin';
import CheckOut from './components/checkout';
import Brew from './components/brew';
import NavBar from './components/navbar';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "gestalt/dist/gestalt.css"



 const Root = () => {
  return (
     <Router >
        <React.Fragment >
            <NavBar />
                <Switch>
                    <Route component ={App} exact path= "/"/>
                    <Route component ={SignIn}  path= "/signin"/>
                    <Route component ={SignUp}  path= "/signup"/>
                    <Route component ={CheckOut}  path= "/checkout"/>
                    <Route component={Brew}   path="/:brandId"/>
                </Switch>
        </React.Fragment>
     </Router>
  )
}



ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
