import React, { Component, CSSProperties } from 'react';
import { Helmet } from 'react-helmet';
import AvatarCard from '../AvatarCard'; 
import MessageBanner from '../MessageBanner'; 
interface State {
  numCards: number, 
  showError: boolean, 
  showSuccess: boolean, 
  progressBar: number
}



class ClientLanding extends Component<{}, State, {}> {
  constructor(props) {
    super(props); 
    this.state = {
      numCards: 4, 
      showError: false, 
      showSuccess: false, 
      progressBar: 0
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

  handleProgressBarWidth = (): CSSProperties => {
    switch (this.state.progressBar) {
      case 0: 
        return {width: '0%'}
      case 1: 
        return {width: '25%'}
      case 2: 
        return {width: '50%'}
      case 3: 
        return {width: '75%'}
      case 4: 
        return {width: '100%'}
      default: 
      return {}
    }
  }

  handleNextStep = () => {
    this.setState(prevState => ({
      progressBar: prevState.progressBar === 4 ? 4 : prevState.progressBar + 1
    }))
  }

  handlePreviousStep = () => {
    this.setState(prevState => ({
      progressBar: prevState.progressBar === 0 ? 0 : prevState.progressBar - 1
    }))
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
          <div className="progress-bar" role="progressbar" style = {this.handleProgressBarWidth()}>
          </div>
        </div>
        <div className = "mt-4">
          <div className = "right-step-btn-container">		
            <button type="button" className="btn btn-outline-primary" onClick = {this.handleNextStep}>Next Step</button>
          </div>
          <div>		
            <button type="button" className="btn btn-outline-primary" onClick = {this.handlePreviousStep} >Previous Step</button>
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
