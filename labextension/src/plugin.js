import { IRenderMime } from 'jupyterlab/lib/rendermime';
import { IDocumentRegistry } from 'jupyterlab/lib/docregistry';
import { toArray } from 'phosphor/lib/algorithm/iteration';
import { findLastIndex } from 'phosphor/lib/algorithm/searching';
import { OutputRenderer } from './output';
import { DocWidgetFactory } from './doc';
import './index.css';

/**
 * Activate the extension.
 */
function activatePlugin(app, rendermime, registry) {

  /**
   * Calculate the index of the renderer in relation to other renderers
   * or simply pass an integer such as 0, 1, or -1 (for last).
   */
  // const index = findLastIndex(toArray(rendermime.mimetypes()), mimetype => mimetype.endsWith('+json')) + 1;
  const index = 0;
  
  /**
   * Add the renderer to the registry of renderers.
   */
  rendermime.addRenderer('application/vnd.plotly.v1+json', new OutputRenderer(), index);
  
  if ('plotly.json') {
    /**
     * Set the extensions associated with Plotly.
     */
    const EXTENSIONS = ['.plotly', '.plotly.json'];
    const DEFAULT_EXTENSIONS = ['.plotly', '.plotly.json'];

    /**
     * Add file handler for plotly.json files.
     */
    let options = {
      fileExtensions: EXTENSIONS,
      defaultFor: DEFAULT_EXTENSIONS,
      name: 'Plotly',
      displayName: 'Plotly',
      modelName: 'text',
      preferKernel: false,
      canStartKernel: false
    };

    registry.addWidgetFactory(new DocWidgetFactory(options));
  }

}

const Plugin = {
  id: 'jupyter.extensions.Plotly',
  requires: 'plotly.json' ? [IRenderMime, IDocumentRegistry] : [IRenderMime],
  activate: activatePlugin,
  autoStart: true
};

export default Plugin;
