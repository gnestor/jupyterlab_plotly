/* 
  Copyright (c) Jupyter Development Team.
  Distributed under the terms of the Modified BSD License. 
*/

import {
  JupyterLab,
  JupyterLabPlugin
} from 'jupyterlab/lib/application';

import {
  IRenderMime
} from 'jupyterlab/lib/rendermime';

import {
  MimeRenderer
} from './renderer';

import './index.css';

/**
 * Activate the table widget extension.
 */
function activateJSONPlugin(app: JupyterLab, rendermime: IRenderMime): void {

  /**
   * Add the MIME type based renderer(s) at the beginning of the renderers.
   */
  rendermime.addRenderer('application/vnd.plotly.v1+json', new MimeRenderer(), 0);

}

/**
 * Initialization data for the jupyterlab_plotly extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_plotly',
  requires: [IRenderMime],
  activate: activateJSONPlugin,
  autoStart: true
};

export default extension;
