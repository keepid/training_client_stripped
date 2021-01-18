import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import aangImage from '../../static/images/aang.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function AangCard(props) {
  return (
    <div className="p-2 my-2 col-lg-4 col-md-6">
      <div className="card">
        <div className="card-body">
          <img src={aangImage} className="card-img-top" alt="" />
          <h5 className="card-title">Aang</h5>
          <p className="cardText">Aang is the last airbender and rides a flying bison named Appa.</p>
          <button className="btn btn-primary" type="submit">Learn About the Avatar</button>
        </div>
      </div>
    </div>
  );
}

class ClientLanding extends Component<{}, {}, {}> {
  render() {
    return (
      <div className="p-0 container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="m-1">
          <h1>Welcome Daniel Joo</h1>
        </div>

        <div className="p-1 my-2 container">
          <div className="progress" />
        </div>

        <div className="px-3 container">
          <div className="row justify-content-start">
            <button className="m-2 btn btn-primary" type="submit">Error Message</button>
            <button className="m-2 btn btn-primary" type="submit">Success Toast</button>
            <button className="m-2 btn btn-primary" type="submit">Magical Potato</button>
            <button className="m-2 btn btn-primary" type="submit">Golden Avocado</button>
          </div>
        </div>

        <div className="container-fluid">
          <Row>
            <AangCard />
            <AangCard />
            <AangCard />
            <AangCard />
            <AangCard />
          </Row>
        </div>

      </div>
    );
  }
}

export default ClientLanding;
