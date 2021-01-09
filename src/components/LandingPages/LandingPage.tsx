import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Aang from '../../static/images/aang.jpg';
import Error from '../../static/images/error-icon.svg';

class ClientLanding extends Component<{}, {}, {}> {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>

        <div className="alert alert-danger my-3 border-red" role="alert">
          <div className="row">
            <img src={Error} className="banner-error-icon ml-2" alt="error icon" />
            <div className="col">
              <h6 className="alert-heading">The Fire Nation has Attacked!</h6>
              <body className="alert-danger"> Fire lord Ozai has attacked the Earth Kingdon. Try performing the action again.</body>
            </div>
          </div>

        </div>

        <h1>Welcome Austin Wu</h1>
        <div className="progress my-3">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: '50%' }}
          />
        </div>
        <div className="container">
          <div className="row justify-content-between">
            <button type="button" className="btn btn-outline-primary">Previous Step</button>
            <button type="button" className="btn btn-outline-primary">Next Step</button>
          </div>
          <div className="row my-5">
            <button type="button" className="btn btn-primary mr-5">Error Message</button>
            <button type="button" className="btn btn-primary mr-5">Success Toast</button>
            <button type="button" className="btn btn-primary">Add Card</button>
          </div>

        </div>

        <div className="container">
          <div className="card-group pt-md-4">
            <div className="col-sm">
              <div className="card shadow">
                <img src={Aang} className="card-img-top" alt="aang picture" />
                <div className="card-body">
                  <h5 className="card-title">Aang</h5>
                  <p className="card-text">
                    Aang is the Last Airbender and rides a flying bison named
                    Appa.
                  </p>
                  <button type="button" className="btn btn-primary" style={{ width: '100%' }}>
                    Learn About the
                    Avatar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card shadow">
                <img src={Aang} className="card-img-top" alt="aang picture" />
                <div className="card-body">
                  <h5 className="card-title">Aang</h5>
                  <p className="card-text">
                    Aang is the Last Airbender and rides a flying bison named
                    Appa.
                  </p>
                  <button type="button" className="btn btn-primary" style={{ width: '100%' }}>
                    Learn About the
                    Avatar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card shadow">
                <img src={Aang} className="card-img-top" alt="aang picture" />
                <div className="card-body">
                  <h5 className="card-title">Aang</h5>
                  <p className="card-text">
                    Aang is the Last Airbender and rides a flying bison named
                    Appa.
                  </p>
                  <button type="button" className="btn btn-primary" style={{ width: '100%' }}>
                    Learn About the
                    Avatar
                  </button>
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
