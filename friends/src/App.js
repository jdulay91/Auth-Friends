import React, { Fragment, useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import NewFriendForm from "./components/NewFriendForm";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const [friends,setFriends] = useState([])
  useEffect(()=>{
    
  })
  
  return (
    <Fragment>
      <Home/>
      <Switch>        
        <Route path="/login" component={Login} />
        <PrivateRoute path="/addFriend" component={NewFriendForm} />
        <PrivateRoute path="/friends" component={()=> <Friends friends={friends}/>} />
      </Switch>
    </Fragment>
  );
}

export default App;
