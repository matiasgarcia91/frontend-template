import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "./pages/Home";
import Space from "./pages/Space";
import MySpace from "./pages/MySpace";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className='App'>
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/space/:id' component={Space} />
        <Route path='/signup' component={SignUp} />
        <Route path='/myspace' component={MySpace} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
