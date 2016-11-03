/* 
  Copyright (c) Jupyter Development Team.
  Distributed under the terms of the Modified BSD License. 
*/

import * as React from 'react';

import * as Plotly from 'plotly.js';

import {
  JSONValue
} from 'phosphor/lib/algorithm/json';

export default class PlotlyRenderer extends React.Component<any, any> {

  componentDidMount(): void {
    const { data, layout } = this.props.data;
    Plotly.newPlot(this.el, data, layout);
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  public render(): JSX.Element {
    const { layout } = this.props.data;
    const style: React.CSSProperties = {};
    if (layout && layout.height && !layout.autosize) {
      style.height = layout.height;
    }
    return (
      <div style={style} ref={(el) => { this.el = el; }} />
    );
  }

  props: {
    data: {
      data: any[],
      layout: any
    }
  };
  el: HTMLElement;
  
}
