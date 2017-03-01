from IPython.display import display, JSON
import json


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
    
class Plotly(JSON):
    """A display class for displaying Plotly visualizations in the Jupyter Notebook and IPython kernel.
    
    Vega expects a JSON-able dict, not serialized JSON strings.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """

    # @property
    # def data(self):
    #     return self._data
    # 
    # @data.setter
    # def data(self, data):
    #     if isinstance(data, str):
    #         data = json.loads(data)
    #     self._data = data

    def _data_and_metadata(self):
        return self.data, self.metadata
    
    def _ipython_display_(self):
        bundle = {
            'application/vnd.plotly.v1+json': self.data,
            'text/plain': '<jupyterlab_plotly.Plotly object>'
        }
        metadata = {
            'application/vnd.plotly.v1+json': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
