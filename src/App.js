import React from 'react';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import dashboard from './components/Dashboard'
import './App.css';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

function App() {
  return (
    < Router>
    <div className="form">
     <Switch>
     <Route path="/" exact component={SignUp} />
     <Route path="/signin" component={SignIn} />
     <Route path="/dashboard" component={dashboard} />
      
     </Switch>
     
    </div>
    </Router>

    
  );
}


export default App;
