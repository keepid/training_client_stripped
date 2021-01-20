import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import AvatarCard from '../AvatarCard'; 
import MessageBanner from '../MessageBanner'; 
interface State {
  numCards: number, 
  showError: boolean, 
  showSuccess: boolean 
}



class ClientLanding extends Component<{}, State, {}> {
  constructor(props) {
    super(props); 
    this.state = {
      numCards: 4, 
      showError: false, 
      showSuccess: false 
    }
  }

  renderCards() {
    let ret: Array<JSX.Element> = []
    for (let i = 0; i < this.state.numCards; i++) {
      ret.push(<AvatarCard />); 
    }
    return ret; 
  }

  handleAddCard = () => {
    this.setState(prevState => ({
      numCards: prevState.numCards + 1
    }))
  }

  handleRemoveLastCard = () => {
    this.setState(prevState => ({
      numCards: prevState.numCards === 0 ? 0 : prevState.numCards - 1
    }))
  }

  handleErrorMessage = () => {
    this.setState({showError: true, showSuccess: false}); 
  }

  handleSuccessMessage = () => {
    this.setState({showError: false, showSuccess: true})
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <MessageBanner showError = {this.state.showError} showSuccess = {this.state.showSuccess} handleErrorChange = {() => this.setState({showError: false})} handleSuccessChange ={() => this.setState({showSuccess: false})} />
        <div className = "mt-5 mb-5">
          <h1>Welcome Gagandeep Kang</h1>
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar">
          </div>
        </div>
        <div className = "mt-4">
          <div className = "right-step-btn-container">		
            <button type="button" className="btn btn-outline-primary">Next Step</button>
          </div>
          <div>		
            <button type="button" className="btn btn-outline-primary">Previous Step</button>
          </div>
        </div>
        <div className = "btn-container">
          <button type="button" className="btn btn-primary" onClick = {this.handleErrorMessage}>Error Message</button>
          <button type="button" className="btn btn-primary" onClick = {this.handleSuccessMessage}>Success Toast</button>
          <button type="button" className="btn btn-primary" onClick = {this.handleAddCard}>Add Card</button>
          <button type="button" className="btn btn-primary" onClick = {this.handleRemoveLastCard}>Remove Last Card</button>
        </div>
        <div className = "container">
          <div className = "row">
            {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default ClientLanding;
