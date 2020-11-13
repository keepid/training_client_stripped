import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class ClientLanding extends Component<{}, {}, {}> {
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Keep.id" />
        </Helmet>
        <h1>Welcome to the Landing Page</h1>
      </div>
    );
  }
}

export default ClientLanding;
