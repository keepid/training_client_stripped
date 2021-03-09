import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';
import ReCAPTCHA from 'react-google-recaptcha';
import getServerURL from '../serverOverride';
import LoginSVG from '../static/images/login-svg.svg';
import { reCaptchaKey } from '../configVars';
import { Redirect } from 'react-router-dom';

interface State {
  username: string,
  password: string,
  buttonState: string,
  recaptchaPayload: string
}

const recaptchaRef: React.RefObject<ReCAPTCHA> = React.createRef();

interface Props {
  setLoginState: (isLoggedIn: boolean) => void,
  isLoggedIn: boolean,
  alert: any
}

class LoginPage extends Component<Props, State> {
  static enterKeyPressed(event, funct) {
    if (event.key === 'Enter') {
      funct();
    }
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonState: '',
      recaptchaPayload: '',
    };
  }

  // event handlers- whenever an action happens, update the state
  handleChangePassword = (event: any) => {
    this.setState({ password: event.target.value });
  }

  handleChangeUsername = (event: any) => {
    this.setState({ username: event.target.value });
  }

  // recaptcha specific code: see https://github.com/dozoisch/react-google-recaptcha
  onSubmitWithReCAPTCHA = async (e) => {
    e.preventDefault();
    if (recaptchaRef !== null && recaptchaRef.current !== null) {
      const recaptchaPayload = await recaptchaRef.current.executeAsync();
      this.setState({ recaptchaPayload }, this.handleLogin);
    }
  }

  resetRecaptcha = (): void => {
    if (recaptchaRef !== null && recaptchaRef.current !== null) {
      recaptchaRef.current.reset();
    }
    this.setState({ recaptchaPayload: '' });
  }

  redirectToHome = () => {
    return <Redirect to= "/home" />
  }

  handleLogin = async (): Promise<void> => {
    // TODO in front end training module
    const loginResp = await fetch(getServerURL() + "/login", {method: "post", body: JSON.stringify({username: this.state.password, password: this.state.password})}); 
    const body = await loginResp.json(); 
    if (body.status === "AUTH_SUCCESS") {
      this.props.setLoginState(true); 
      this.props.alert.show("Successful Login")
      this.redirectToHome(); 
    }
    else {
      this.props.setLoginState(false); 
      this.props.alert.show("Unsuccessful Login")
    }
  }

  render() {
    const {
      username,
      password,
    } = this.state;
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="container">
          <div className="row mt-4">
            <div className="col mobile-hide">
              <div className="float-right w-100">
                <img alt="Login graphic" className="w-75 pt-5 mt-5 mr-3 float-right " src={LoginSVG} />
              </div>
              <div className="row pl-3 pb-3">
                <span className="text-muted recaptcha-login-text pt-4 mt-4 pl-5 ml-5 w-75">
                  This page is protected by reCAPTCHA, and subject to the Google
                  {' '}
                  <a href="https://www.google.com/policies/privacy/">Privacy Policy </a>
                  and
                  {' '}
                  <a href="https://www.google.com/policies/terms/">Terms of service</a>
                  .
                </span>
              </div>
            </div>

            <div className="col">
              <form className="form-signin pt-5">
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <label htmlFor="username" className="w-100 font-weight-bold">
                  Username
                  <input
                    type="text"
                    className="form-control form-purple mt-1"
                    id="username"
                    placeholder="username"
                    value={username}
                    onChange={this.handleChangeUsername}
                    required
                  />
                </label>
                <label htmlFor="password" className="w-100 pt-2 font-weight-bold">
                  Password
                  <input
                    type="password"
                    className="form-control form-purple mt-1"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={this.handleChangePassword}
                    required
                  />
                </label>
              </form>
              <div className="row pl-3 pt-3">
                <div className="pb-2">
                  <button
                    type="submit"
                    onKeyDown={(e) => LoginPage.enterKeyPressed(e, this.onSubmitWithReCAPTCHA)}
                    onClick={this.onSubmitWithReCAPTCHA}
                    className={`btn btn-success px-5 loginButtonBackground w-100 ld-ext-right ${this.state.buttonState}`}
                  >
                    Sign In
                    <div className="ld ld-ring ld-spin" />
                  </button>
                </div>
              </div>
            </div>

          </div>
          <ReCAPTCHA
            theme="dark"
            size="invisible"
            ref={recaptchaRef}
            sitekey={reCaptchaKey}
          />
        </div>
      </div>
    );
  }
}

export default withAlert()(LoginPage);
