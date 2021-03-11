import React, { Component } from 'react';
import { CSSProperties } from 'react';
import { Helmet } from 'react-helmet';
import {RouteComponentProps, withRouter} from "react-router";
import aangPhoto from '/Users/leonard/Desktop/KeepID/training_client_stripped/src/static/images/aang.jpg';

// import BaseCard, { CardImageLoc, CardSize } from '../BaseComponents/BaseCard';

interface Props extends RouteComponentProps {
    name: String
}

class LandingPage extends Component<Props, {}> {
  render() {
    const { name } = this.props;
    return (
      <div id="Buttons" className="container pt-5">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>

        <div className="alert alert-danger" role="alert">
          <strong>The Fire Nation has attacked!</strong> Go defeat Fire Lord Ozai
        </div>

        <div className="d-flex p-2">
          <h1>
            Welcome {name}
          </h1>
        </div>

        <hr className="m-2 mt-2 mb-4"/>

        <div className="p-2 btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group" role="group" aria-label="First group">
            <button type="button" className="btn btn-outline-primary">Previous Step</button>
          </div>
          <div className="btn-group" role="group" aria-label="First group">
            <button type="button" className="btn btn-outline-primary">Next Step</button>
          </div>
        </div>

        <div id="bottom-button-row" className="p-2 btn-toolbar justify-content-between" role="toolbar" aria-label="Bottom toolbar">
          <div className="btn-group" role="group" aria-label="First group">
              <button type="button" className="btn btn-primary">Error Message</button>
          </div>
          <div className="btn-group" role="group" aria-label="Second group">
              <button type="button" className="btn btn-primary">Success Toast</button>
          </div>
          <div className="btn-group" role="group" aria-label="Third group">
            <button type="button" className="btn btn-primary">Add Card</button>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm">  
              <div className="shadow ml-2 mt-5 member-card">
                <img className="card-img-top" src={aangPhoto} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison names Appa</p>
                    <p style={{ textAlign: "center" }}>
                      <a href="#" className="btn btn-primary">Learn About the Avatar</a>
                    </p>
                  </div>
              </div> 
            </div>
            <div className="col-sm">
              <div className="shadow ml-2 mt-5 member-card">
                <img className="card-img-top" src={aangPhoto} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison names Appa</p>
                    <p style={{ textAlign: "center" }}>
                      <a href="#" className="btn btn-primary">Learn About the Avatar</a>
                    </p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="shadow ml-2 mt-5 member-card">
                <img className="card-img-top" src={aangPhoto} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison names Appa</p>
                    <p style={{ textAlign: "center" }}>
                      <a href="#" className="btn btn-primary">Learn About the Avatar</a>
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="container">
          <div className="row">
            <div className="col-sm">  
              <div className="shadow ml-2 mt-5 member-card">
                <img className="card-img-top" src={aangPhoto} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison names Appa</p>
                    <p style={{ textAlign: "center" }}>
                      <a href="#" className="btn btn-primary">Learn About the Avatar</a>
                    </p>
                  </div>
              </div> 
            </div>
            <div className="col-sm">
              <div className="shadow ml-2 mt-5 member-card">
                <img className="card-img-top" src={aangPhoto} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison names Appa</p>
                    <p style={{ textAlign: "center" }}>
                      <a href="#" className="btn btn-primary">Learn About the Avatar</a>
                    </p>
                  </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="shadow ml-2 mt-5 member-card">
                <img className="card-img-top" src={aangPhoto} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison names Appa</p>
                    <p style={{ textAlign: "center" }}>
                      <a href="#" className="btn btn-primary">Learn About the Avatar</a>
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    );
  }
}

export default withRouter(LandingPage);
