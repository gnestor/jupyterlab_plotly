# jupyterlab_plotly

A JupyterLab and Jupyter Notebook extension for rendering Plotly

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

## Prerequisites

* JupyterLab ^0.18.0 and/or Notebook >=4.3.0

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

```bash
pip install jupyterlab_plotly
# For JupyterLab
jupyter labextension install --symlink --py --sys-prefix jupyterlab_plotly
jupyter labextension enable --py --sys-prefix jupyterlab_plotly
# For Notebook
jupyter nbextension install --symlink --py --sys-prefix jupyterlab_plotly
jupyter nbextension enable --py --sys-prefix jupyterlab_plotly
```

## Development

```bash
pip install -e .
# For JupyterLab
jupyter labextension install --symlink --py --sys-prefix jupyterlab_plotly
jupyter labextension enable --py --sys-prefix jupyterlab_plotly
# For Notebook
jupyter nbextension install --symlink --py --sys-prefix jupyterlab_plotly
jupyter nbextension enable --py --sys-prefix jupyterlab_plotly
```
