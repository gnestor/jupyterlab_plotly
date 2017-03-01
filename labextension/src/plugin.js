import { IRenderMime } from 'jupyterlab/lib/rendermime';
import { IDocumentRegistry } from 'jupyterlab/lib/docregistry';
import { toArray, ArrayExt } from '@phosphor/algorithm';
import { OutputRenderer } from './output';
import { DocWidgetFactory } from './doc';
import './index.css';

/**
 * Activate the extension.
 */
function activatePlugin(app, rendermime, registry) {
  /**
   * Calculate the index of the renderer in the array renderers (e.g. Insert 
   * this renderer after any renderers with mime type that matches "+json") 
   * or simply pass an integer such as 0.
   */
  // const index = ArrayExt.findLastIndex(
  //   toArray(rendermime.mimeTypes()),
  //   mime => mime.endsWith('+json')
  // ) + 1;
  const index = 0;

  /**
   * Add the renderer to the registry of renderers.
   */
  rendermime.addRenderer(
    {
      mimeType: 'application/vnd.plotly.v1+json',
      renderer: new OutputRenderer()
    },
    index
  );

  /**
   * Set the extensions associated with Plotly.
   */
  const EXTENSIONS = ['.plotly'];
  const DEFAULT_EXTENSIONS = ['.plotly'];

    /**
     * Add file handler for plotly files.
     */
    const options = {
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

const Plugin = {
  id: 'jupyter.extensions.Plotly',
  requires: [IRenderMime, IDocumentRegistry],
  activate: activatePlugin,
  autoStart: true
};

export default Plugin;
