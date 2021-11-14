import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAccount from './components/pages/CreateAccount';
import UserPage from './components/pages/UserPage';
import UserInfo from './components/pages/UserInfo';
import Admin from './components/pages/Admin';



import LogIn from './components/pages/LogIn';
import AdminInput from './components/pages/AdminInput';
import SearchClubs from './components/pages/SearchClubs';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route path="/search">
              <Home />

            </Route>
           
            <Route path="/logIn">
              <LogIn />
            </Route>

            <Route path="/createAccount">
              <CreateAccount />
            </Route>

            <Route path="/userPage">
              <UserPage />
            </Route>

            <Route path="/userInfo">
              <UserInfo />
            </Route>

            <Route path="/admin">
              <Admin />
            </Route>

            <Route path="/adminInput">
              <AdminInput />
            </Route>

            <Route path="/searchClubs">
              <SearchClubs />
            </Route>

            

          </Switch>
        </div>





      </Router>
    </>
  );
}

export default App;