import React from 'react';
import Plotly from 'plotly.js/lib/core';
// import './index.css';

export default class PlotlyComponent extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    const { data, layout } = this.getFigure();
    Plotly.newPlot(this.el, data, layout);
    this.handleResize();
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
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { layout } = this.getFigure();
    const style = {
      width: '100%',
      height: layout && layout.height && !layout.autosize ? layout.height : 450
    };
    return (
      <div
        style={style}
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
  
  handleResize = (event) => {
    Plotly.Plots.resize(this.el);
  }

  getFigure = () => {
    const { data } = this.props;
    if (typeof data === 'string') return JSON.parse(data);
    return data;
  }
}
