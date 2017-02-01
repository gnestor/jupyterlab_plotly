from IPython.display import display


# Running `npm run build` will create static resources in the static
# directory of this Python package (and create that directory if necessary).


def _jupyter_labextension_paths():
    return [{
        'name': 'jupyterlab_plotly',
        'src': 'static',
    }]

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyterlab_plotly',
        'require': 'jupyterlab_plotly/extension'
    }]


# A display function that can be used within a notebook. E.g.:
#   from jupyterlab_plotly import Plotly
#   Plotly(data)

def Plotly(data):
    bundle = {
        'application/vnd.plotly.v1+json': data,
        'application/json': data,
        'text/plain': '<jupyterlab_plotly.Plotly object>'
    }
    display(bundle, raw=True)
