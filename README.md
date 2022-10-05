
[![Join our Forum](https://img.shields.io/badge/-Join%20our%20Forum-blue)](https://forums.docker.com/t/about-the-hacktoberfest-category/129061)
[![Swag Store](https://img.shields.io/badge/-Swag%20Store-orange)](https://stores.kotisdesign.com/docker)
![Visitor count](https://shields-io-visitor-counter.herokuapp.com/badge?page=docker.hacktoberfest-2022)

## Docker and Hacktoberfest 2022

Welcome to the [Hacktoberfest 2022](https://hacktoberfest.digitalocean.com/) with Docker Extensions!

Hacktoberfest is a month-long celebration of open-source projects, their maintainers, and the entire community of contributors. This event is all about giving back to the community and celebrating all things open source. We’d like to invite you to celebrate Hacktoberfest with us and contribute to the [Docker Community Extensions](https://www.docker.com/products/extensions/) .

## Table of Contents

- ❓[How to participate?](#how-to-participate)
- ✔️[List of Docker Extensions for Hacktoberfest 2022](#list-of-docker-extensions-for-hacktoberfest-2022)
- 🏗️[How to Build Your First Docker Extension](#how-to-build-your-first-docker-extension)
- 🗣️[Propose Your Docker Extension in the Hacktoberfest List](#propose-your-docker-extension-in-the-hacktoberfest-list)
- 📹[Videos](#videos)
- 💬[Support and Community](#support-and-community)

## ❓How to participate?

To participate, there are two main ways you can contribute:

1. Create a new own open source extension and add it to the list below.
2. Contribute to any of the existing open source extensions listed below that are allowing PRs for Hacktoberfest.

In order to take part in Hacktoberfest, all you need to do is open [Pull Requests](https://github.com/docker/hacktoberfest-2022/pulls) on this repo or any of the repos listed below joining Hacktoberfest, and get your PR merged or approved.

We know that creating your own extension can feel like a big undertaking so here are a few guidelines to keep in mind:

1. The extension should resolve a user pain point or help fill an existing user need.
2. The extension does not need to be production ready by the end of Hacktoberfest.
3. The extension could be an idea or proof of concept.

## ✔️List of Docker Extensions for Hacktoberfest 2022

Here is a list of Docker Extension repos you can contribute to, part of the Hacktoberfest event.

You can add your own extension in this list with your own github repository.

| Name/Github Repo                                                                        | Category               | Status         | PRs welcome |
| --------------------------------------------------------------------------------------- | ---------------------- | -------------- | ----------- |
| [Volumes Backup & Share](https://github.com/docker/volumes-backup-extension)            | Utility                | In Marketplace | ✅          |
| [JFrog](https://github.com/jfrog/jfrog-docker-desktop-extension)                        | Security               | In Marketplace | ✅          |
| [Aventer Mini Cluster](https://github.com/AVENTER-UG/docker-mesos-extension)            | Cloud Infrastructure   | In Marketplace | ✅          |
| [DDosify](https://github.com/ddosify/ddosify-docker-extension)                          | Tests                  | In Marketplace | ✅          |
| [Lacework Scanner](https://github.com/l6khq/lacework-docker-extension)                  | Security               | In Marketplace | ✅          |
| [GOSH](https://github.com/gosh-sh/hacktoberfest2022/)                                   | Blockchain             | In Marketplace | ✅          |
| [Meshery](https://github.com/meshery/meshery/tree/master/install/docker-extension)      | Cloud Native Management| In Marketplace | ✅          |
| [Okteto](https://github.com/okteto/docker-desktop-extension)                            | Development Platform   | In Marketplace | ✅          |
| [RedHat OpenShift](https://github.com/redhat-developer/openshift-dd-ext)                | Development Platform   | In Marketplace | ✅          |
| [Postman](https://github.com/loopDelicious/docker-extension)                            | Tests                  | Community      | ✅          |
| [Github Registry](https://github.com/peacecwz/github-registry-docker-desktop-extension) | Image registry         | Community      | ✅          |
| [Swagger-Editor](https://github.com/n-murphy/swagger-editor-docker-extension)           | Development Tools      | Community      | ✅          |
| [Drone](https://github.com/harness/drone-desktop-docker-extension)                      | Continuous Integration | Community      | ✅          |
| [Alfresco](https://github.com/AlfrescoLabs/alfresco-docker-extension)                   | Content Management     | Community      | ✅          |
| [DDM](https://github.com/jatin711-debug/request-docker-extension)                       | Development tools      | Community      | ✅          |
| [Storj](https://github.com/elek/docker-storj-extension)                                 | Cloud Infrastructure   | Community      | ✅          |
| [SuperTokens](https://github.com/supertokens/supertokens-docker-extension)              | Authentication         | Community      | ✅          |
| [Parseable](https://github.com/parseablehq/parseable-docker-extension)                  | Log Store & Observability| Community    | ✅          |
| Add new extension to participate | | | |

## List of Docker Extensions suggestions

Here is a list of suggestions or ideas for new Docker Extensions:

| Name/Github Repo                                        | Category                  |
| ------------------------------------------------------- | ------------------------- |
| [Dive Tool](https://github.com/wagoodman/dive)          | Utility                   |
| [Watchtower](https://github.com/containrrr/watchtower)  | Infrastructure/Automation |
| [Buildg](https://github.com/ktock/buildg)               | Debugging                 |
| [Mongo Express](https://hub.docker.com/_/mongo-express) | Database                  |
| [Popeye](https://github.com/derailed/popeye)            | Debugging                 |
| [Botkube](https://botkube.io/)                          | Monitoring/Debugging      |

## 🏗️How to Build Your First Docker Extension

See steps below about how to create your first Docker Extension, and how to add it in the list.

When adding an extension, you can also specify if you accept Hacktoberfest contributions in your extension, that will encourage other people to participate and improve the extension you propose.

If you have any questions, join our [Community Slack channel](https://dockercommunity.slack.com) #extensions.

## Creating your first Docker Extension

To get started, you can create your first Docker Extension in minutes. See details in our [QuickStart guide](https://docs.docker.com/desktop/extensions-sdk/quickstart/).

In a nutshell:

- If you have not Docker Desktop installed yet, [install Docker Desktop](https://www.docker.com/products/docker-desktop/).
- in a terminal, type

```
docker extension init my-extension
```

It will prompt you for a Docker image name for your extension, and a few details. This will generate a hello-world extension with a basic UI and a connected backend service (optional).

- navigate to the generated folder, and type

```
make install-extension
```

to build and install the generated extension.

- Open Docker Desktop Dashboard and test the extension by navigating to the `Test-Extension` tab. You now have a running extension!

![First extension](images/init-extension-screenshot.png)

## 🗣️Propose Your Docker Extension in the Hacktoberfest List

- Once you have a GitHub repo for your extension, edit the `README.md` and describe your extension, the pain point or user needs it solves.
- Push the new Git repo to your GitHub account

```
 git remote add origin https://github.com/my-account/my-extension.git
 git push -u origin main
```

- Fork https://github.com/docker/hacktoberfest-2022 repo
- In your local clone of `docker/hacktoberfest-2022` repo, add your extension in the list (in `README.md`). Don't forget to include:
  - extension name, and a one line description
  - Github repo for the description
  - status of the Extension you add: `idea` (if you have not started to actually code the extension), `Community` (some code has been started), `functional` (functionality is implemented)
  - specify if you accept PRs from other Hacktoberfest participant (set `hacktoberfest` label on your git repo)
- commit your changes and push a branch on your local fork, and create a Pull Request in docker/hacktoberfest-2022 with your branch

## 📹Videos

| How to Build Your First Docker Extension                                                                                                                                                 | Creating Docker Extension from Scratch                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Build Your First Docker Extension](https://user-images.githubusercontent.com/313480/190869414-282ac0c5-26a7-4970-a5f2-bb0442f37495.png)](https://www.youtube.com/watch?v=Fu6BuqJ4MtE) | [![Creating Docker Extension from Scratch](https://user-images.githubusercontent.com/313480/190869394-18ce29d8-bd43-4292-afb8-467c97899864.png)](https://www.youtube.com/watch?v=HqCnOhbcobE) |

| Introducing Docker Extension                                                                                                                                                               | What are Docker Extensions                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Introducing Docker Extension](https://user-images.githubusercontent.com/313480/190869475-09e75525-ac6a-4bbe-9c0f-fc1e7c16b51f.png)](https://www.youtube.com/watch?v=BHKp7Sc3VVc&t=420s) | [![What are Docker Extensions](https://user-images.githubusercontent.com/313480/190869659-6018e125-e09a-479c-9eba-621c708a9a34.png)](https://www.youtube.com/watch?v=zfDSFw9Z8YY) |

## 💬Support and Community

If you do get enough interest to build a Docker Extension, the team at Docker is available to support you.
You can find us in the [Docker Forum](https://forums.docker.com/t/about-the-hacktoberfest-category/129061), post issues on our [SDK repo](https://github.com/docker/extensions-sdk), or reach us via email extensions(AT)docker.com.

## References:

- [Introduction to Docker Extensions](https://docs.docker.com/desktop/extensions/)
- [How to create your own Docker Extensions](https://docs.docker.com/desktop/extensions-sdk/)
- [Create Your First Extensions](https://docs.docker.com/desktop/extensions-sdk/tutorials/initialize/)
- [Minimal frontend extensions tutorial](https://docs.docker.com/desktop/extensions-sdk/tutorials/minimal-frontend-extension/)
- [Minimal React Extensions tutorial](https://docs.docker.com/desktop/extensions-sdk/tutorials/react-extension/)
- [Minimal Docker CLI Extensions tutorial](https://docs.docker.com/desktop/extensions-sdk/tutorials/minimal-frontend-using-docker-cli/)
