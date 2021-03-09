import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './static/styles/App.scss';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Error from './modules/Error';
import Footer from './components/Footer';
import getServerURL from './serverOverride';
import LoginPage from './modules/LoginPage';
import LandingPage from './modules/LandingPages/LandingPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ firstName?: string; lastName?: string }>({});

  const handleLoginStateChange = (state: boolean) => {
    setIsLoggedIn(state);
    if (!state) {
      fetch(`${getServerURL()}/logout`, {
        method: 'GET',
        credentials: 'include',
      });
    } else {
      fetch(`${getServerURL()}/get-user-info`, {
        method: 'POST',
        credentials: 'include',
      })
        .then((r) => r.json())
        .then((userInfoResponseBody) => {
          if (userInfoResponseBody.status === 'SUCCESS') {
            setUser(userInfoResponseBody);
          }
        });
    }
  };

  return (
    <Router>
      <div className="App">
        <div className="app">
          <Helmet>
            <title>Keep.id</title>
            <meta
              name="description"
              content="Securely Combating Homelessness"
            />
          </Helmet>
          <Header
            isLoggedIn={isLoggedIn}
            setLoginState={handleLoginStateChange}
          />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route
              path="/home"
              render={() => (isLoggedIn
                ? <LandingPage firstName={user.firstName || ''} lastName={user.lastName || ''} />
                : <Redirect to="/login" />)}
            />
            <Route
              path="/login"
              render={() => (isLoggedIn ? (
                <Redirect to="/home" />
              ) : (
                <LoginPage
                  isLoggedIn={isLoggedIn}
                  setLogInState={handleLoginStateChange}
                />
              ))}
            />
            <Route path="/error">
              <Error />
            </Route>
            <Route>
              <Redirect to="/error" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
