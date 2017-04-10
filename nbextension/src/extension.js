/**
 * This file contains the javascript that is run when the notebook is loaded.
 * It contains some requirejs configuration and the `load_ipython_extension` 
 * which is required for any notebook extension.
 */

/**
 * Configure requirejs.
 */
if (window.require) {
  window.require.config({
    map: {
      '*': {
        'jupyterlab_plotly': 'nbextensions/jupyterlab_plotly/index'
      }
    }
  });
}

/**
 * Export the required load_ipython_extention.
 */
export function load_ipython_extension() {
  define(
    [
      'nbextensions/jupyterlab_plotly/index',
      'base/js/namespace',
      'base/js/events',
      'notebook/js/outputarea'
    ],
    (Extension, Jupyter, events, outputarea) => {
      const { notebook } = Jupyter;
      const { OutputArea } = outputarea;
      Extension.register_renderer(notebook, events, OutputArea);
      Extension.render_cells(notebook);
    }
  );
}
