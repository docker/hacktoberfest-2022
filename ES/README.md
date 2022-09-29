[![Slack](https://img.shields.io/badge/slack-chat-green.svg)](https://dockercommunity.slack.com/)
[![Swag Store](https://img.shields.io/badge/-Swag%20Store-orange)](https://stores.kotisdesign.com/docker)
[![Join our Forum](https://img.shields.io/badge/-Join%20our%20Forum-blue)](https://forums.docker.com/t/about-the-hacktoberfest-category/129061)
![Visitor count](https://shields-io-visitor-counter.herokuapp.com/badge?page=docker.hacktoberfest-2022)

## Docker y Hacktoberfest 2022

¡Bienvenido al [Hacktoberfest 2022](https://hacktoberfest.digitalocean.com/) con las extensiones de Docker!

Hacktoberfest es una celebración de un mes de proyectos de código abierto, sus mantenedores y toda la comunidad de colaboradores. Este evento se trata de retribuir a la comunidad y celebrar todo lo relacionado con el código abierto. Nos gustaría invitarlo a celebrar el Hacktoberfest con nosotros y contribuir a las [Extensiones de la comunidad de Docker](https://www.docker.com/products/extensions/).

## Tabla de contenido

- ❓ [¿Cómo participar?](#cómo-participar)
- ✔️ [Lista de extensiones de Docker para Hacktoberfest 2022](#lista-de-extensiones-docker-para-hacktoberfest-2022) 
- 🏗️ [Cómo construir su primera extensión Docker](#cómo-construir-su-primera-extensión-docker)
- 🗣️ [Proponga su extensión Docker en la lista Hacktoberfest](#proponga-su-extensión-docker-en-la-lista-hacktoberfest)
- 📹 [Vídeos](#vídeos)
- 💬 [Soporte y comunidad](#soporte-y-comunidad)

## ❓¿Cómo participar?

Para participar, hay dos formas principales en las que puedes contribuir:

1. Cree una nueva extensión propia de código abierto y agréguela a la lista a continuación.
2. Contribuya a cualquiera de las extensiones de código abierto existentes que se enumeran a continuación que permiten PRs (pull request) para Hacktoberfest.

Para participar en Hacktoberfest, todo lo que necesita hacer es abrir [Pull Requests](https://github.com/docker/hacktoberfest-2022/pulls) en este repositorio o en cualquiera de los repositorios enumerados a continuación para unirse a Hacktoberfest, y obtenga su PR fusionado o aprobado.

Sabemos que crear su propia extensión puede parecer una gran tarea, por lo que aquí hay algunas pautas a tener en cuenta:

1. La extensión debe resolver un problema del usuario o ayudar a satisfacer una necesidad existente del usuario.
2. No es necesario que la extensión esté lista para producción al final del Hacktoberfest.
3. La extensión puede ser una idea o una prueba de concepto.

## ✔️Lista de extensiones Docker para Hacktoberfest 2022

Aquí hay una lista de repositorios de extensiones de Docker a los que puede contribuir, como parte del evento Hacktoberfest.

Puede agregar su propia extensión en esta lista con su propio repositorio de github.

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
| [Swagger](https://github.com/n-murphy/swagger-editor-docker-extension)                  | Development Tools      | Community      | ✅          |
| [Drone](https://github.com/harness/drone-desktop-docker-extension)                      | Continuous Integration | Community      | ✅          |
| [Alfresco](https://github.com/AlfrescoLabs/alfresco-docker-extension)                   | Content management     | Community      | ✅          |
| [DDM](https://github.com/jatin711-debug/request-docker-extension)                       | Development tools      | Community      | ✅          |
| [Storj](https://github.com/elek/docker-storj-extension)                                 | Cloud Infrastructure   | Community      | ✅          |
| [Parseable](https://github.com/parseablehq/parseable-docker-extension)                  | Log Store & Observability| Community    | ✅          |
| [SuperTokens](https://github.com/supertokens/supertokens-core)                          | Authentication         | Community      | ✅          |
| [Swagger](https://github.com/n-murphy/swagger-editor-docker-extension) ([main product](https://github.com/n-murphy/swagger-editor)) | Development Tools | Community | ✅ |
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
- Push the new Git repo to your GithHub account

```
 git remote add origin https://github.com/my-account/my-extension.git
 git push -u origin main
```

- Fork https://github.com/docker/hacktoberfest-2022 repo
- In your local clone of `docker/harcktoberfest` repo, add your extension in the list (in `README.md`). Don't forget to include:
  - extension name, and a one line description
  - Github repo for the description
  - status of the Extension you add: `idea` (if you have not started to actually code the extension), `Community` (some code has been started), `functional` (functionality is implemented)
  - specify if you accept PRs from other Hacktoberfest participant (set `hacktoberfest` label on your git repo)
- commit your changes and push a branch on your local fork, and create a Pull Request in docker/harcktoberfest with your branch

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
