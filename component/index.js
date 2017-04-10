import React from 'react';
import './index.css';

export default class PlotlyComponent extends React.Component {
  render() {
    return (
      <div className="Plotly">
        {JSON.stringify(this.props)}
      </div>
    );
  }
}
