import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './static/styles/App.scss';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import getServerURL from './serverOverride';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPages/LandingPage';

interface State {
  isLoggedIn: boolean;
  name: string;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: true,
      // FIXME: hardcoding my name for now lmao
      name: 'Leonard Tang',
    };
  }

  setLoginState = (isLoggedIn: boolean) => {
    this.setState({ isLoggedIn });
    if (!isLoggedIn) {
      fetch(`${getServerURL()}/logout`, {
        method: 'GET',
        credentials: 'include',
      });
    }
  };

  render() {
    const { isLoggedIn, name } = this.state;
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
              setLoginState={this.setLoginState}
            />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route
                path="/home"
                render={() => (isLoggedIn ? <LandingPage name={name} /> : <Redirect to="/login" />)}
              />
              <Route
                path="/login"
                render={() => (isLoggedIn ? (
                  <Redirect to="/home" />
                ) : (
                  <LoginPage
                    isLoggedIn={isLoggedIn}
                    setLoginState={this.setLoginState}
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
  }
}
export default App;
