import React, {Component} from 'react'

interface props {
    showError: boolean,
    showSuccess: boolean, 
    handleErrorChange: any, 
    handleSuccessChange: any 
}

class MessageBanner extends Component<props, {},{}> {
    constructor(props) {
        super(props); 
    }
    render(){
        if (this.props.showError) {
            return (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Fire Lord Ozai has attacked the Earth Kingdom.</strong> Try performing the action again.
                    <button type="button" className="close" aria-label="Close" onClick = {this.props.handleErrorChange}><span aria-hidden="true">&times;</span></button>
                </div>
            )
        }
        else if (this.props.showSuccess) {
            return (               
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <p>Avatar state unlocked</p>
                    <button type="button" className="close" aria-label="Close" onClick = {this.props.handleSuccessChange}><span aria-hidden="true">&times;</span></button>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}


export default MessageBanner