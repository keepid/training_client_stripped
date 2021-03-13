import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Error from '../../static/images/error-icon.svg';
import Aang from '../../static/images/aang.jpg';

class ClientLanding extends Component<{}, {}, {}> {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>

        <div className="col">

          <div className="alert alert-danger my-3 border-red" role="alert">
            <div className="row">
              <img src={Error} className="banner-error-icon ml-2" alt="error icon" />
              <div className="col">
                <strong className="alert-heading">The Fire Nation has Attacked!</strong>
                <body className="alert-danger">Fire lord Ozai has attacked the Earth Kingdom. Try performing the action again.</body>
              </div>
            </div>
          </div>

          <h1>Welcome Lazar Gueorguiev</h1>

          <div className="progress my-3">
            <div className="progress-bar" role="progressbar" />
          </div>

          <div className="container">
            <div className="row justify-content-between">
              <button type="button" className="btn btn-outline-primary">Previous Step</button>
              <button type="button" className="btn btn-outline-primary">Next Step</button>
            </div>
            <div className="row my-5">
              <button type="button" className="btn btn-primary mr-5">Error Message</button>
              <button type="button" className="btn btn-primary mr-5">Success Toast</button>
              <button type="button" className="btn btn-primary mr-5">Add Card</button>
              <button type="button" className="btn btn-primary mr-5">Remove Last Card</button>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-start my-5">
              <div className="col-sm-4">
                <div className="card shadow">
                  <img className="card-img-top" src={Aang} alt="Aang img" />
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                    <button type="button" className="btn btn-primary">Learn About the Avatar</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card shadow">
                  <img className="card-img-top" src={Aang} alt="Aang img" />
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                    <button type="button" className="btn btn-primary">Learn About the Avatar</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card shadow">
                  <img className="card-img-top" src={Aang} alt="Aang img" />
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                    <button type="button" className="btn btn-primary">Learn About the Avatar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-start my-5">
              <div className="col-sm-4">
                <div className="card shadow">
                  <img className="card-img-top" src={Aang} alt="Aang img" />
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                    <button type="button" className="btn btn-primary">Learn About the Avatar</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card shadow">
                  <img className="card-img-top" src={Aang} alt="Aang img" />
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                    <button type="button" className="btn btn-primary">Learn About the Avatar</button>
                  </div>
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
