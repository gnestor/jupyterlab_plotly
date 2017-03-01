import { Widget } from '@phosphor/widgets';
import React from 'react';
import ReactDOM from 'react-dom';
import PlotlyComponent from 'jupyterlab_plotly_react';

/**
 * The class name added to this OutputWidget.
 */
const CLASS_NAME = 'jp-OutputWidgetPlotly';

/**
 * A widget for rendering Plotly.
 */
export class OutputWidget extends Widget {
  constructor(options) {
    super();
    this.addClass(CLASS_NAME);
    this._data = options.model.data.get(options.mimeType);
    this._metadata = options.model.metadata.get(options.mimeType);
  }

  /**
   * A message handler invoked on an `'after-attach'` message.
   */
  onAfterAttach(msg) {
    this._render();
  }

  /**
   * A message handler invoked on an `'before-detach'` message.
   */
  onBeforeDetach(msg) {
    ReactDOM.unmountComponentAtNode(this.node);
  }

  /**
   * A render function given the widget's DOM node.
   */
  _render() {
    ReactDOM.render(
      <PlotlyComponent data={this._data} metadata={this._metadata} />,
      this.node
    );
  }
}

export class OutputRenderer {
  /**
   * The mime types this OutputRenderer accepts.
   */
  mimeTypes = [ 'application/vnd.plotly.v1+json' ];

  /**
   * Whether the renderer can render given the render options.
   */
  canRender(options) {
    return this.mimeTypes.indexOf(options.mimeType) !== -1;
  }

  /**
   * Render the transformed mime bundle.
   */
  render(options) {
    return new OutputWidget(options);
  }
}
