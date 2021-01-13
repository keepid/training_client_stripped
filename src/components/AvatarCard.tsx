import React, { Component } from 'react';
import Avatar from "../static/images/aang.jpg"; 

class AvatarCard extends Component<{}, {}, {}> {
    render(){
        return (
            <div className = "card mt-5 mr-5" style = {{width: 300}}>
                <img className="card-img-top" src={Avatar} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                    <a href="#" className="btn btn-primary">Learn About the Avatar </a>
                </div>
            </div>
        )
    }
}

export default AvatarCard; 