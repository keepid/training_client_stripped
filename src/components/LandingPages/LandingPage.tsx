import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import jasmine from '../../static/images/Jasminum-Sambac.jpg';

class ClientLanding extends Component<{}, {}, {}> {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <h1>Welcome Ankita Sethi</h1>
        <div className="progress">
          <div className="progress-bar w-75" role="progressbar" aria-label="nav" />
        </div>
        <nav className="navbar navbar-light bg-light">
          <form className="container-fluid justify-content-md-between">
            <button className="btn btn-outline-success me-2" type="button">Prev</button>
            <button className="btn btn-outline-success me-2" type="button">Next</button>
          </form>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <form className="container-fluid btn-group-justified">
            <button className="btn btn-outline-success me-2" type="button"> Compare cards</button>
            <button className="btn btn-outline-success me-2" type="button"> Add Card</button>
            <button className="btn btn-outline-success me-2" type="button"> Delete Card</button>
          </form>
        </nav>
        <div className="card-deck">
          <div className="card">
            <img src={jasmine} height={200} width={200} alt="Jasminum Flower" />
            <div className="card-body">
              <p className="card-text">Flower : Jasmine Sambicum.</p>
              <a href="https://gardenbeast.com/jasminum-sambac-guide/"> Learn more about Jasmine</a>
            </div>
          </div>
          <div className="card">
            <img src={jasmine} height={200} width={200} alt="Jasminum Flower" />
            <div className="card-body">
              <p className="card-text">Flower : Jasmine Sambicum.</p>
              <a href="https://gardenbeast.com/jasminum-sambac-guide/"> Learn more about Jasmine</a>
            </div>
          </div>
          <div className="card">
            <img src={jasmine} height={200} width={200} alt="Jasminum Flower" />
            <div className="card-body">
              <p className="card-text">Flower : Jasmine Sambicum.</p>
              <a href="https://gardenbeast.com/jasminum-sambac-guide/"> Learn more about Jasmine</a>
            </div>
          </div>
          <div className="card">
            <img src={jasmine} width={200} height={200} alt="Jasminum Flower" />
            <div className="card-body">
              <p className="card-text">Flower : Jasmine Sambicum.</p>
              <a href="https://gardenbeast.com/jasminum-sambac-guide/"> Learn more about Jasmine</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientLanding;
