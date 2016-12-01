import { IRenderMime } from 'jupyterlab/lib/rendermime';
import { IDocumentRegistry } from 'jupyterlab/lib/docregistry';
import { OutputRenderer } from './output';
import { DocWidgetFactory } from './doc';
import './index.css';

/**
 * Activate the table widget extension.
 */
function activatePlugin(app, rendermime, registry) {

  /**
   * Add the MIME type  renderer to the top of the renderers.
   */
  rendermime.addRenderer('application/vnd.plotly.v1+json', new OutputRenderer(), 0);
  
  if ('.plotly.json') {
    /**
     * The list of file extensions for json.
     */
    const EXTENSIONS = ['..plotly.json'];
    const DEFAULT_EXTENSIONS = ['..plotly.json'];

    /**
     * Add file handler for .plotly.json files.
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
  requires: '.plotly.json' ? [IRenderMime, IDocumentRegistry] : [IRenderMime],
  activate: activatePlugin,
  autoStart: true
};

export default Plugin;
