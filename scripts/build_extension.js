var buildExtension = require('@jupyterlab/extension-builder').buildExtension;

buildExtension({
        name: 'jupyterlab_plotly',
        entry: './lib/plugin.js',
        outputDir: './jupyterlab_plotly/static'
});
