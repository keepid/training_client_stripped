import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Alert, Button, Card, Col, Container, ProgressBar, Row, Toast,
} from 'react-bootstrap';
import Aang from '../../static/images/aang.jpg';
import ErrorIcon from '../../static/images/error-icon.svg';
import SuccessIcon from '../../static/images/check.svg';

const a = 'Welcome <Firstname> <Lastname>';

type LandingState = {
  progress: number,
  cards: number[],
  warningMessage: boolean,
  successMessage: boolean
}

class ClientLanding extends Component<{}, LandingState> {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      cards: [],
      warningMessage: false,
      successMessage: false,
    };
  }

  toggle = () => { this.setState((prevState) => ({ successMessage: !prevState.successMessage })); }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        {this.state.warningMessage ? <WarningBanner /> : <div />}
        <h1>{a}</h1>
        <ProgressBar now={this.state.progress} />
        <Container>
          <Row style={{ marginTop: '3%' }}>
            <Col>
              <div style={{ float: 'left' }}>
                { (this.state.progress >= 50) ? (<Button variant="outline-primary" onClick={() => { this.setState((prevState) => ({ progress: prevState.progress - 50 })); }}>Previous Step</Button>) : <div />}
              </div>
            </Col>
            <Col>
              <div style={{ float: 'right' }}>
                { (this.state.progress < 100) ? (<Button variant="outline-primary" onClick={() => { this.setState((prevState) => ({ progress: prevState.progress + 50 })); }}>Next Step</Button>) : <div />}
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: '5%' }}>
            <Col>
              <Button variant="primary" onClick={() => { this.setState((prevState) => ({ warningMessage: !prevState.warningMessage })); }}>Error Message</Button>
              {' '}
            </Col>
            <Col>
              <Button variant="primary" onClick={() => { this.setState((prevState) => ({ successMessage: !prevState.successMessage })); }}>Success Message</Button>
              {' '}
            </Col>
            <Col>
              <Button
                variant="primary"
                onClick={() => {
                  const { cards } = this.state;
                  cards.push(1);
                  this.setState({ cards });
                }}
              >
                Add Card
              </Button>
              {' '}
            </Col>
            <Col>
              { (this.state.cards.length > 0) ? (
                <Button
                  variant="primary"
                  onClick={() => {
                    const { cards } = this.state;
                    cards.pop();
                    this.setState({ cards });
                  }}
                >
                  Remove Card
                </Button>
              ) : <div />}
            </Col>
            <Col md={6} />
          </Row>
        </Container>
        <Container style={{ marginTop: '5%' }}>
          <Row>
            {this.state.cards.map((card) => <Col xs={12} md={4}><AvatarCard /></Col>)}
          </Row>
        </Container>
        {this.state.successMessage ? (
          <Toast onClose={this.toggle}>
            <Toast.Header>
              <img style={{ backgroundColor: 'green' }} src={SuccessIcon} className="rounded mr-2" alt="check" />
              Avatar state unlocked.
            </Toast.Header>
          </Toast>
        ) : <div />}
      </div>
    );
  }
}

function WarningBanner() {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        <img style={{ fill: 'red' }} src={ErrorIcon} className="rounded mr-2" alt="warning" />
        The fire nation has attacked!
      </Alert.Heading>
      Fire lord Ozai has attacked the Earth Kingdom. Try performing the action again.
    </Alert>
  );
}

function AvatarCard() {
  return (
    <Card style={{ width: '320px', height: '379px', float: 'left' }}>
      <Card.Img variant="top" src={Aang} />
      <Card.Body>
        <Card.Title>Aang</Card.Title>
        <Card.Text>
          Aang is the Last Airbender and rides a flying bison named Appa.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClientLanding;
