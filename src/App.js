import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Customer from "./components/Customer/Customer";
import Home from "./components/Home/Home";
import Login from "./components/LoginPage/Login/Login";
import PrivateRoute from './components/LoginPage/PrivateRoute/PrivateRoute';

export const UserContext = createContext(); 
export const ServiceContext = createContext();
export const AdminContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    userName: '',
    email: '',
    error: '',
    photo: '',
    password: '',
    confirmPassword: '',
    isLoggedIn: false
  });

  const [service, setService] = useState({
    id: ''
  })

  const [isAdmin, setAdmin] = useState(false);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <AdminContext.Provider value={[isAdmin, setAdmin]}>
    <ServiceContext.Provider value={[service, setService]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin/:name">
              {isAdmin &&
                <Admin />
              }
            </PrivateRoute>
            <PrivateRoute path="/customer/:name">
              <Customer />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </ServiceContext.Provider>
    </AdminContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
