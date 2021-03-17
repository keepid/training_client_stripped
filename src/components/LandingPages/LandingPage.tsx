import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import aangPhoto from '../../static/images/aang.jpg';
import keepLogo from '../../static/images/favicon-16x16.png';
import { Row, ProgressBar, Alert, Button, Toast } from 'react-bootstrap';


function progressBar(i) {
  const progressInstance = <ProgressBar now={ 20 * i } label="${now}%" srOnly />;
  return (progressInstance);
}

function AangCard() {
  return (
    <div className="shadow ml-1 mt-3 member-card">
      <img className="card-img-top" src={aangPhoto} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Aang</h5>
        <p className="card-text">Aang is the Last Airbender and rides a flying bison names Appa</p>
        <p style={{ textAlign: 'center' }}>
          <a href="#" className="btn btn-primary">Learn About the Avatar</a>
        </p>
      </div>
    </div>
  );
}

function errorBanner() {
  return (
    
    <Alert variant="danger">
      <Alert.Heading>The Fire Nation has attacked!</Alert.Heading>
        Fire lord Ozai has attacked the Earth Kingdom. Try performing the action again.
    </Alert>
  );
}

interface State{
  errorToggle: boolean;
  cardAmount: number;
  progressIndex: number
}

class ClientLanding extends Component<{}, {errorToggle: boolean, progressIndex:number, cardAmount: number, successToast: boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      errorToggle: false,
      progressIndex: 0,
      cardAmount: 0,
      successToast: false,
    };
  }

  renderErrorBanner(props) {
    if (props) {
      return (errorBanner());
    }
  }

  renderPrevNextButtons() {
    if (this.state.progressIndex === 0) {
      return (
        <div className="p-1 d-flex flex-row-reverse">
          <Button variant="btn btn-outline-primary" onClick={() => this.setState({ progressIndex: this.state.progressIndex + 1 })}>Next Step</Button>
        </div>
      );
    } if (this.state.progressIndex === 5) {
      return (
        <div className="p-1 d-flex flex-row">
          <Button variant="btn btn-outline-primary" onClick={() => this.setState({ progressIndex: this.state.progressIndex - 1 })}>Previous Step</Button>
        </div>
      );
    }
    return (
      <div className="p-1 btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-primary" 
          onClick={() => this.setState({ progressIndex: this.state.progressIndex - 1 })}>Previous Step</button>
        </div>
        <div className="btn-group" role="group" aria-label="Second group">
          <button type="button" className="btn btn-outline-primary"
            onClick={() => this.setState({ progressIndex: this.state.progressIndex + 1 })}>Next Step</button>
        </div>
      </div>
    );
  }

  addRobotHandler = () => {
    this.setState((prevState) => ({ cardAmount: prevState.cardAmount + 1 }));
  };

  getCards = () => {
    const cards : JSX.Element[] = [];
    for (let i = 0; i < this.state.cardAmount; i++) {
      cards.push(<AangCard />);
    }
    return cards;
  }

  successToast() {
    if (this.state.successToast) {
      return (
        <Toast>
          <Toast.Header>
            <img src={keepLogo} className="rounded mr-2" alt="" />
            <strong className="mr-auto">Toast Message</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Cheers!</Toast.Body>
        </Toast>
      );
    }
  }

  render() {
    return (
      <div className="container pt-5">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="d-flex p-2">
          <h1>Welcome Leonard Tang</h1>
        </div>

        <div className="p-1 container-fluid">
          {this.renderErrorBanner(this.state.errorToggle)}
        </div>

        <div className="p-1 my-2 container">
          {progressBar(this.state.progressIndex)}
        </div>

        <div>
          {this.renderPrevNextButtons()}
        </div>

        <div className="p-1 mt-3 btn-toolbar">
          <button type="button" className="mr-2 btn btn-primary" onClick={() => this.setState({ errorToggle: !this.state.errorToggle })}>Error Message</button>
          <button type="button" className="ml-2 mr-2 btn btn-primary" onClick={() => this.setState({ successToast: !this.state.successToast })}>Success Toast</button>
          <button type="button" className="ml-2 mr-2 btn btn-primary" onClick={() => this.addRobotHandler() }>Add Card</button>
        </div>

        <div className="container-fluid">
          <Row>
            {this.getCards()}
          </Row>
        </div>

        <div className="p-1 mt-3 container-fluid">
          {this.successToast()}
        </div>

      </div>
    );
  }
}

export default ClientLanding;