import React, { Component, useState } from 'react';
import { Helmet } from 'react-helmet';
import { withAlert } from 'react-alert';
import ReCAPTCHA from 'react-google-recaptcha';
import getServerURL from '../serverOverride';
import LoginSVG from '../static/images/login-svg.svg';
import { reCaptchaKey } from '../configVars';

const recaptchaRef: React.RefObject<ReCAPTCHA> = React.createRef();

interface Props {
  setLogInState: (isLoggedIn: boolean) => void,
  isLoggedIn: boolean,
  alert: any
}

const LoginPage = ({ alert, isLoggedIn, setLogInState }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [buttonState, setButtonState] = useState<string>();
  const [recaptchaPayload, setRecaptchaPayload] = useState<string>();

  const handleLogin = async () => {
    const loginResponse = await fetch(`${getServerURL()}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const loginResponseBody = await loginResponse.json();
    if (loginResponse.ok && loginResponseBody.status === 'AUTH_SUCCESS') {
      alert.show('Login successful!', { type: 'success' });
      setLogInState(true);
      return;
    }

    let errorMessage = 'Login failed!';
    if (loginResponseBody.status === 'USER_NOT_FOUND') {
      errorMessage = 'Incorrect Username!';
    } else if (loginResponseBody.status === 'AUTH_FAILURE') {
      errorMessage = 'Incorrect Password!';
    }

    alert.show(errorMessage, { type: 'error' });
    setLogInState(false);
  };

  const onSubmitWithReCAPTCHA = async (e) => {
    e.preventDefault();
    if (recaptchaRef !== null && recaptchaRef.current !== null) {
      const payload = await recaptchaRef.current.executeAsync();
      setRecaptchaPayload(payload);
    }
    return handleLogin();
  };

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
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </form>
            <div className="row pl-3 pt-3">
              <div className="pb-2">
                <button
                  type="submit"
                  onKeyDown={LoginPage.onEnterKeyPressed(onSubmitWithReCAPTCHA)}
                  onClick={onSubmitWithReCAPTCHA}
                  className={`btn btn-success px-5 loginButtonBackground w-100 ld-ext-right ${buttonState}`}
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
};

LoginPage.onEnterKeyPressed = (fn) => (e) => {
  if (e.key === 'Enter') {
    fn(e);
  }
};

export default withAlert()(LoginPage);
