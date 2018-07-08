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


def run_build_frontend():
    project_root = os.getcwd()
    os.chdir(os.path.join(project_root, 'frontend'))
    os.system("npm run build")
    os.chdir(project_root)


if __name__ == "__main__":
    set_run_env(os.getenv('ENV', 'PROD'))
    run_build_frontend()
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    execute_from_command_line(sys.argv)
