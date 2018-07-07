#!/usr/bin/env python
import os
import sys

ENV = {
    "DEV": "backend.settings.devsettings",
    "PROD": "backend.settings.prodsettings"
}


def set_run_env(env):
    print("Run application in {0}".format(env))
    os.environ.setdefault("DJANGO_SETTINGS_MODULE",
                          ENV.get(env))


if __name__ == "__main__":
    set_run_env(os.getenv('ENV', 'PROD'))
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    execute_from_command_line(sys.argv)
