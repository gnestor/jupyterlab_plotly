import React from 'react';
import Plotly from 'plotly.js/lib/core';

const DEFAULT_WIDTH = 840;
const DEFAULT_HEIGHT = 336;

export default class PlotlyComponent extends React.Component {
  componentDidMount() {
    // window.addEventListener('resize', this.handleResize);
    const { data, layout } = this.props;
    Plotly.newPlot(this.element, data, layout)
      .then(gd => {
        Plotly.Plots.resize(this.element);
      });
      // .then(gd =>
      //   Plotly.toImage(gd, {
      //     format: 'png',
      //     width: this.props.width || DEFAULT_WIDTH,
      //     height: this.props.height || DEFAULT_HEIGHT
      //   }))
      // .then(url => {
      //   const data = url.split(',')[1];
      //   this.props.callback(null, data);
      //   this.handleResize();
      // });
  }

  componentDidUpdate() {
    const { data, layout } = this.props;
    Plotly.redraw(this.element)
      .then(gd => {
        Plotly.Plots.resize(this.element);
      });
      // .then(gd =>
      //   Plotly.toImage(gd, {
      //     format: 'png',
      //     width: this.props.width || DEFAULT_WIDTH,
      //     height: this.props.height || DEFAULT_HEIGHT
      //   }))
      // .then(url => {
      //   const data = url.split(',')[1];
      //   this.props.callback(null, data);
      //   this.handleResize();
      // });
  }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize);
  // }

  // handleResize = event => {
  //   Plotly.Plots.resize(this.element);
  // };

  render() {
    const { layout } = this.props;
    const style = {
      width: '100%',
      height: layout && layout.height && !layout.autosize
        ? layout.height
        : DEFAULT_HEIGHT
    };
    return (
      <div
        style={style}
        ref={el => {
          this.element = el;
        }}
      />
    );
  }
}
