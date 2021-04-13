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

        {/* Header */}
        <h1>Welcome Jason</h1>

        {/* Progress bar */}
        <div className="progress">
          <div className="progress-bar w-50" role="progressbar" />
        </div>

        {/* Prev/Next step buttons */}
        <div className="progress-bar-btn-container">
          <button type="submit" className="btn btn-outline-primary">Previous Step</button>
          <button type="submit" className="btn btn-outline-primary">Next Step</button>
        </div>

        {/* Error/Success/Add Card buttons */}
        <div className="button-container">
          <button type="submit" className="btn btn-primary">Error Message</button>
          <button type="submit" className="btn btn-primary">Success Toast</button>
          <button type="submit" className="btn btn-primary">Add Card</button>
        </div>
      </div>
    );
  }
}

export default ClientLanding;
