#!/usr/bin/env python
import os
import sys

ENV = {
    "DEV": "backend.settings.devsettings",
    "PROD": "backend.settings.prodsettings"
}


def startup_background_process(args):
    set_run_env()
    is_done_build = os.getenv('IS_DONE_BUILD', "False")
    is_build_react = "react" in args
    if is_done_build and is_build_react:
        run_build_frontend()
        os.environ["IS_DONE_BUILD"] = "True"
        sys.argv.remove('react')


def set_run_env():
    run_envronment = os.getenv('ENV', 'PROD')
    print("Run application in {0}".format(run_envronment))
    os.environ.setdefault("DJANGO_SETTINGS_MODULE",
                          ENV.get(run_envronment))


def run_build_frontend():
    project_root = os.getcwd()
    os.chdir(os.path.join(project_root, 'frontend'))
    os.system("npm run build")
    os.chdir(project_root)


if __name__ == "__main__":
    print("\nRun start application with command bellow: \
           \npython manage.py runserver react => run application with rebuild frontend \
           \npython manage.py runserver without rebuild frontend")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    startup_background_process(sys.argv)
    execute_from_command_line(sys.argv)
