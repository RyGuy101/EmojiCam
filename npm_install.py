#!/usr/bin/env python3

# Running this script achieves the same thing as `npm install` in the app folder, 
# but is much faster at detecting if you already have everything installed.

import os
import sys
import subprocess
import shutil
import pathlib

npm_cmd = shutil.which("npm") # For Windows compatibility

def npm_install():
    if os.path.isfile("package.json"):
        check_deps = str(pathlib.Path("./node_modules/.bin/check-dependencies"))
        if (not os.path.isfile(check_deps)) or (subprocess.call([check_deps], shell=True) != 0):
            exit_code = subprocess.call([npm_cmd, "install"])
            if exit_code != 0:
                sys.exit(exit_code)
        else:
            print("All necessary npm packages are installed")
    else:
        print("Error: package.json not present")
        sys.exit(1)

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.realpath(__file__)))
    os.chdir("app")
    npm_install()
    os.chdir("..")
