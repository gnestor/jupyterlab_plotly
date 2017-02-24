from IPython.display import display, JSON, DisplayObject
import json
import pandas as pd
from .utils import prepare_plotly_data


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


# A display class that can be used within a notebook. E.g.:
#   from jupyterlab_plotly import Plotly
#   Plotly(data)
    
class Plotly(DisplayObject):
    """Plotly expects a data (JSON-able dict or list) and layout (a JSON-able dict) argument

    not an already-serialized JSON string.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """
    # wrap data in a property, which warns about passing already-serialized JSON
    _data = None
    _layout = None
    def __init__(self, data=None, layout=None, url=None, filename=None, metadata=None):
        """Create a Plotly display object given raw data.

        Parameters
        ----------
        data : list
            Not an already-serialized JSON string.
            Scalar types (None, number, string) are not allowed, only list containers.
        layout : dict
            Plotly layout. Not an already-serialized JSON string.
        url : unicode
            A URL to download the data from.
        filename : unicode
            Path to a local file to load the data from.
        metadata: dict
            Specify extra metadata to attach to the json display object.
        """
        self.layout = layout
        self.metadata = metadata
        super(Plotly, self).__init__(data=data, url=url, filename=filename)

    def _check_data(self):
        if self.layout is not None and not isinstance(self.layout, dict):
            raise TypeError("%s expects a JSONable dict, not %r" % (self.__class__.__name__, self.layout))
        if self.data is not None and not isinstance(self.data, (list, pd.DataFrame)):
            raise TypeError("%s expects a JSONable list or pandas DataFrame, not %r" % (self.__class__.__name__, self.data))

    @property
    def layout(self):
        return self._layout
        
    @property
    def data(self):
        return self._data
        
    @layout.setter
    def layout(self, layout):
        if isinstance(layout, str):
            # warnings.warn("Plotly expects a JSONable dict, not JSON strings")
            layout = json.loads(layout)
        self._layout = layout

    @data.setter
    def data(self, data):
        if isinstance(data, str):
            # warnings.warn("Plotly expects JSONable dict or list, not JSON strings")
            data = json.loads(data)
        self._data = data
        
    def _ipython_display_(self):
        bundle = {
            'application/vnd.plotly.v1+json': {
                'layout': self.layout,
                'data': prepare_plotly_data(self.data)
            },
            'text/plain': '<jupyterlab_plotly.Plotly object>'
        }
        metadata = {
            'application/vnd.plotly.v1+json': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
