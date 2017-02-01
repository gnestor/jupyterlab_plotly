# jupyterlab_plotly

A JupyterLab and Jupyter Notebook extension for rendering Plotly

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

## Prerequisites

* JupyterLab ^0.14 and/or Notebook >=4.3

## Usage

To render Plotly output in IPython:

```python
from jupyterlab_plotly import Plotly

Plotly({
    "string": "string",
    "array": [1, 2, 3],
    "bool": True,
    "object": {
        "foo": "bar"
    }
})
```

To render a `.plotly` file as a tree, simply open it:

![file renderer](http://g.recordit.co/cbf0xnQHKn.gif)

## Install

To install using pip:

```bash
pip install jupyterlab_plotly
# For JupyterLab
jupyter labextension install --py --sys-prefix jupyterlab_plotly
jupyter labextension enable --py --sys-prefix jupyterlab_plotly
# For Notebook
jupyter nbextension install --py --sys-prefix jupyterlab_plotly
jupyter nbextension enable --py --sys-prefix jupyterlab_plotly
```

## Development

### Set up using install script

Use the `install.sh` script to build the Javascript, install the Python package, and install/enable the notebook and lab extensions:

```bash
bash install.sh --sys-prefix
```

Use the `build.sh` script to rebuild the Javascript:

```bash
bash build.sh
```

### Set up manually

Alternatively, see the `README.md` in `/labextension` and `/nbextension` for extension-specific build instructions. 

To install the Python package:

```bash
pip install -e .
```

To install the extension for JupyterLab:

```bash
jupyter labextension install --symlink --py --sys-prefix jupyterlab_plotly
jupyter labextension enable --py --sys-prefix jupyterlab_plotly
```

To install the extension for Jupyter Notebook:

```bash
jupyter nbextension install --symlink --py --sys-prefix jupyterlab_plotly
jupyter nbextension enable --py --sys-prefix jupyterlab_plotly
```
