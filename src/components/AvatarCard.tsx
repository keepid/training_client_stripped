import React, { Component } from 'react';
import Avatar from "../static/images/aang.jpg"; 

class AvatarCard extends Component<{}, {}, {}> {
    render(){
        return (
            <div className = "card mt-5 mr-5">
                <img className="card-img-top" src={Avatar} alt = "Flying Aang"/>
                <div className="card-body">
                    <h5 className="card-title">Aang</h5>
                    <p className="card-text">Aang is the Last Airbender and rides a flying bison named Appa.</p>
                    <button className="btn btn-primary">Learn About the Avatar </button>
                </div>
            </div>
        )
    }
}

export default AvatarCard; 