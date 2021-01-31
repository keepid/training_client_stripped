import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, ProgressBar, Alert , Button, Toast} from 'react-bootstrap';
import aangImage from '../../static/images/aang.jpg';

function AangCard() {
  return (
    <div className="p-2 my-2 col-lg-4 col-md-6">
      <div className="card">
        <div className="card-body">
          <img src={aangImage} className="card-img-top" alt="" />
          <h5 className="card-title">Aang</h5>
          <p className="cardText">Aang is the last airbender and rides a flying bison named Appa.</p>
          <button 
            className="btn btn-primary" 
            type="submit"
            >Learn About the Avatar
          </button>
        </div>
      </div>
    </div>
  );
}

function barOfProgress(i) {
  const now = i;
  const progressInstance = <ProgressBar now={now} label={'${now}%'} srOnly />
  return(progressInstance)
}

function fireNationError() {
  return(
    <Alert variant="danger">
      <Alert.Heading>The Fire Nation has attacked!</Alert.Heading>
      <p>
        <Alert.Link href="https://youtu.be/dQw4w9WgXcQ">Here is the damage report</Alert.Link>.
        Try clicking the error message again.
      </p>
    </Alert>
  );
}

interface IState{
  errorToggle: boolean;
  cardAmount: number;
  barProgress: number
}

class ClientLanding extends Component<{},{errorToggle: boolean, barProgress:number, moreCard: boolean, successToast: boolean}> {
  constructor(props){
    super(props);
    this.state = {
      errorToggle: false,
      barProgress: 0,
      moreCard: false,
      successToast: false,
    };
  }

  renderErrorBar(props){
    if (props){
      return(fireNationError());
    }
  }

  renderPrevAndNext(){
    if(this.state.barProgress === 0){
      return(
        <div className="p-1 my-2 container">
          <Button variant="m-2 btn-primary" onClick={() => this.setState({barProgress: this.state.barProgress + 20})}>Next Step</Button>
        </div>
      )
    } else if(this.state.barProgress === 100){
      return(
        <div className="p-1 my-2 container">
          <Button variant="m-2 btn-primary" onClick={() => this.setState({barProgress: this.state.barProgress - 20})}>Previous Step</Button>
        </div>
      )
    } else{
      return(
        <div className="p-1 my-2 container">
          <Button variant="m-2 btn-primary" onClick={() => this.setState({barProgress: this.state.barProgress - 20})}>Previous Step</Button>
          <Button variant="m-2 btn-primary" onClick={() => this.setState({barProgress: this.state.barProgress + 20})}>Next Step</Button>
        </div>
      )
    }
  }

  addCard(){
    if (this.state.moreCard){
      this.setState({moreCard: false});
      return (AangCard());
    }
    else{return(null)};
  }

  successToast(){
    if(this.state.successToast){
      return(
        <Toast>
          <Toast.Body>some toast message</Toast.Body>
        </Toast>
      )
    }
  }

  render(){
    return (
      <div className="p-0 container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <div className="m-1">
          <h1>Welcome Daniel Joo</h1>
        </div>

        <div className="p-0 container-fluid">
          {this.renderErrorBar(this.state.errorToggle)}
        </div>

        <div className="p-1 my-2 container">
          {barOfProgress(this.state.barProgress)}
        </div>

        <div className="p-1 my-2 container">
          {this.renderPrevAndNext()}
        </div>

        <div className="px-3 container">
          <div className="row justify-content-start">
            <Button variant="m-2 btn-primary" onClick={() => this.setState({errorToggle: !this.state.errorToggle})}>Error Message</Button>
            <Button variant="m-2 btn-primary" onClick={() => this.setState({successToast: !this.state.successToast})}>Success Toast</Button>
            <Button variant="m-2 btn-primary" onClick={() => this.setState({moreCard: true})}>Add Card</Button>
          </div>
        </div>

        <div className="container-fluid">
          <Row>
            <AangCard />
            <AangCard />
            {this.addCard()}
          </Row>
        </div>

        <div className="container-fluid">
          {this.successToast()}
        </div>

      </div>
    );
  }
}

export default ClientLanding;
