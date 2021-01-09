import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ErrorSVG from '../../static/images/error-24px.svg';
import AangJPG from '../../static/images/aang.jpg';

class ClientLanding extends Component<{}, {}, {}> {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Home!</title>
          <meta name="description" content="Keep.id" />
        </Helmet>

        <div className="alert alert-danger-custom mt-3" role="alert">
          <div className="row py-1 pl-3">
            <img src={ErrorSVG} className="banner-error-icon" alt="error icon" />
            <div className="col">
              <b>The Fire Nation has attacked!</b>
              <br />
              Fire lord Ozai has attacked the Earth Kingdom. Try performing the action again.
            </div>
          </div>
        </div>

        <h1 className="mt-4">Welcome Vanessa Hu</h1>
        <div className="progress my-5">
          <div className="progress-bar active" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} />
        </div>

        <div className="container">
          <div className="row justify-content-between my-3">
            <button type="button" className="btn btn-outline-primary">Previous Step</button>
            <button type="button" className="btn btn-outline-primary">Next Step</button>
          </div>
          <div className="row mb-5 justify-content-between justify-content-lg-start">
            <button type="button" className="btn btn-primary mr-3">Error Message</button>
            <button type="button" className="btn btn-primary mr-3">Success Toast</button>
            <button type="button" className="btn btn-primary">Add Card</button>
          </div>
        </div>

        <div className="container">
          <div className="card-group pt-md-4">
            <div className="card mx-3">
              <img className="card-img-top" src={AangJPG} alt="Aang" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                <div className="row">
                  <button type="button" className="btn btn-primary mx-2 w-100">Learn About the Avatar</button>
                </div>
              </div>
            </div>
            <div className="card mx-3">
              <img className="card-img-top" src={AangJPG} alt="Aang" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                <div className="row">
                  <button type="button" className="btn btn-primary mx-2 w-100">Learn About the Avatar</button>
                </div>
              </div>
            </div>
            <div className="card mx-3">
              <img className="card-img-top" src={AangJPG} alt="Aang" />
              <div className="card-body">
                <h5 className="card-title">Aang</h5>
                <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                <div className="row">
                  <button type="button" className="btn btn-primary mx-2 w-100">Learn About the Avatar</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ClientLanding;
