#!/usr/bin/env python
# coding: utf-8


import subprocess
import distutils.command.build_py

from setuptools import setup, find_packages  # noqa: H301

NAME = "mcns-0x-sra-client"
VERSION = "1.0.1"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

with open("README.md", "r") as file_handle:
    README_MD = file_handle.read()

REQUIRES = ["urllib3 >= 1.15", "six >= 1.10", "certifi", "python-dateutil"]

class TestPublishCommand(distutils.command.build_py.build_py):
    """Custom command to publish to test.pypi.org."""

    description = (
        "Publish dist/* to test.pypi.org. Run sdist & bdist_wheel first."
    )

    def run(self):
        """Run twine to upload to test.pypi.org."""
        subprocess.check_call(  # nosec
            (
                "twine upload --repository-url https://pypi.maecenas.co/simple/"
                + " --verbose dist/*"
            ).split()
        )


class PublishCommand(distutils.command.build_py.build_py):
    """Custom command to publish to pypi.org."""

    description = "Publish dist/* to pypi.org. Run sdist & bdist_wheel first."

    def run(self):
        """Run twine to upload to pypi.org."""
        subprocess.check_call("twine upload --repository-url https://pypi.org/simple/simple/ dist/*".split())  # nosec


class LintCommand(distutils.command.build_py.build_py):
    """No-op lint command to support top-level lint script."""

    description = "No-op"

    def run(self):
        pass


setup(
    name=NAME,
    version=VERSION,
    description="Standard Relayer REST API",
    author_email="",
    url="https://github.com/motonauta/0x-monorepo.git/python-packages/sra_client",
    keywords=["OpenAPI", "OpenAPI-Generator", "Standard Relayer REST API"],
    install_requires=REQUIRES,
    packages=find_packages(),
    include_package_data=True,
    long_description=README_MD,
    long_description_content_type="text/markdown",
    cmdclass={
        "test_publish": TestPublishCommand,
        "publish": PublishCommand,
        "lint": LintCommand,
    },
)
