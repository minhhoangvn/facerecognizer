import os
from .basesettings import *

DEBUG = True

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, '..', 'webpack-stats.dev.json'),
    }
}
