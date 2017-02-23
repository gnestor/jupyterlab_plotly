import React from 'react';
import Plotly from 'plotly.js/lib/core';
// import './index.css';

export default class PlotlyComponent extends React.Component {
  componentDidMount() {
    const { data, layout } = this.getFigure();
    Plotly.newPlot(this.el, data, layout);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.data !== nextProps.data;
  }

  componentDidUpdate() {
    const { data, layout } = this.getFigure();
    this.el.data = data;
    this.el.layout = layout;
    Plotly.redraw(this.el);
  }

  render() {
    const { layout } = this.getFigure();
    const style = {};
    if (layout && layout.height && !layout.autosize)
      style.height = layout.height;
    return (
      <div
        style={style}
        ref={el => {
          this.el = el;
        }}
      />
    );
  }

  getFigure = () => {
    const { data } = this.props;
    if (typeof data === 'string') return JSON.parse(data);
    return data;
  };
}
