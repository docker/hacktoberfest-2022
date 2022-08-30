# hacktoberfest-2022

## Goal

To be detailed/reworded:

- goal: provide your ideas of new Docker Extensions
  - expectations : not prod ready for the marketplace, but resolves a user pain / need
  - ideas welcome, no need to "finish" the extension (status in extension list?)
- using Hacktoberfest labels and PRs in this repo to append new extensions in the extensions list
- when adding new repo : specify if you accept PRs from other hacktoberfest participants

## List of Docker extensions

| Extension                        | github repo                                                                    | Status       | Allows PRs for Hacktoberfest |
| -------------------------------- | ------------------------------------------------------------------------------ | ------------ | ---------------------------- |
| Volumes Backup                   | [volumes-backup-extension](https://github.com/docker/volumes-backup-extension) | Ready to use | ✅                           |
| Add new extension to participate |                                                                                |              |                              |

## Creating your first Docker Extension

To get started, you can create your first Docker Extension in minutes. See details in our [QuickStart guide](https://docs.docker.com/desktop/extensions-sdk/quickstart/).

In a nutshell:

- If you have not Docker Desktop installed yet, [install Docker Desktop](https://www.docker.com/products/docker-desktop/).
- in a terminal, type `> docker extension install my-extension`. It will prompt you for a Docker image name for your extension, and a few details. This will generate a hello-world extension with a basic UI and a connected backend service (optional).
- navigate to the generated folder, and type `make install-extension` to build and install the generated extension.
- Open Docker Desktop Dashboard and test the extension by navigating to the "Test-Extension" tab

![First extension](images/init-extension-screenshot.png)
