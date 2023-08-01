import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
// import { Login } from '@mui/icons-material';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebasea';

function App() {

  const [{user}, dispatch] = useStateValue();
  // piece of code which runs based on a given condition
  useEffect(() => {
    // this will only run once when the app component loads...
    const unsubscribe= auth.onAuthStateChanged(authUser => {
      if(authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
      })
    }
      else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
      })
    }
    });

    return () => {
      // any cleanup operations go in here
      unsubscribe();
    }
  }, []);

  console.log("USER IS >>>", user);

  return (
    <Router>
      <div className="app">
      {/* <h1>Hello Clever Programmer</h1> */}
      <Switch>
        <Route path="/checkout">
          <Header/> 
          <Checkout/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          {/* RENDERING A COMPONENT */}
            <Header/> 
            <Home/>
        </Route>
        {/* by default goes to the last one */}
        {/* ie if url doesnt match, goes to last/homepage */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;

// the react context api is used to create a data layer
// the data layer is used to pass data around the app
// can use redux as well, it is more powerful
// but context api is easier to use and is lightweight