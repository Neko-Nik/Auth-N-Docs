---
sidebar_position: 3
---

# Pre-requisites

There are some things you'll need to do before you can install Auth-N


## Server Requirements

We **strongly** recommend installing Auth-N on its own dedicated server (i.e. a server running no other software). The minimum specification for Postal is as follows:

- **Operating System**: Any Debian-based Linux distribution (e.g. Ubuntu, Debian, etc.)

- **CPU**: 2 cores (minimum)

- **RAM**: 2GB (minimum)

- **Disk Space**: 10GB (recommended) [Includes space for logs, database, etc.]

- **Network**: Public IP address (required) [For API access]

- **Ports**: 80, 443 (required) [For HTTP and HTTPS access]

- **Domain**: A valid domain name associated with the server (required) [For SSL certificate]


## Dependencies

Auth-N requires the following dependencies to be installed on your server before you can start using it:

- **Docker**: Auth-N is mainly distributed as a Docker container, so you'll need to have Docker installed on your server. You can find instructions on how to install Docker [here](https://docs.docker.com/get-docker/).

- **Docker Compose**: Auth-N uses Docker Compose to manage multiple containers. You can find instructions on how to install Docker Compose [here](https://docs.docker.com/compose/install/).

That's it! Once you have the server requirements and dependencies installed, you can proceed to the installation guide to set up Auth-N on your server.

:::tip Note
    The Database can be hosted on a separate server if required. In such cases, you'll need to ensure that the database server meets the minimum requirements specified above.
:::
