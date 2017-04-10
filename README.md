# jupyterlab_plotly

A JupyterLab and Jupyter Notebook extension for rendering Plotly charts

![lab](http://g.recordit.co/CmiB0dfKUa.gif)

![notebook](http://g.recordit.co/AFtqwfIM9B.gif)

## Prerequisites

* JupyterLab ^0.18.0 and/or Notebook >=4.3.0

## Usage

To render Plotly JSON using IPython:

```python
from jupyterlab_plotly import Plotly

data = [
    {'x': [1999, 2000, 2001, 2002], 'y': [10, 15, 13, 17], 'type': 'scatter'},
    {'x': [1999, 2000, 2001, 2002], 'y': [16, 5, 11, 9], 'type': 'scatter'}
]

layout = {
    'title': 'Sales Growth',
    'xaxis': { 'title': 'Year', 'showgrid': False, 'zeroline': False },
    'yaxis': { 'title': 'Percent', 'showline': False }
}

Plotly(data, layout)
```

To render a Plotly JSON (`.plotly` or `.plotly.json`) file in JupyterLab, simply open it.

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
