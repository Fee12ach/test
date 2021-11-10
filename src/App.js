import React from 'react'
import Login  from './Components/Login';
import  Homepage  from './Components/Homepage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

 const App = () => {
  return (
    <div>
       <Router>
          <Switch>
              <Route path="/Login">
                  <Login />
              </Route>
              <Route path="/Homepage">
                  <Homepage />
              </Route>
          </Switch>
        </Router>
    </div>
  )
}

export default App;
