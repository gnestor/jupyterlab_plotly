import React from 'react';
import './index.css';

export default class Plotly extends React.Component {

  render() {
      return (
        <div className="Plotly">
          {JSON.stringify(this.props.data)}
        </div>
      );
  }

}
