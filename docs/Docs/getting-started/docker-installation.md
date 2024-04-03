---
sidebar_position: 4
---

# Docker Installation

We provide a Docker image to make it easy to get started and run Auth-N on your server. This guide will walk you through the steps to install Auth-N using Docker Compose.

With Docker, you can run Auth-N on any server that supports Docker, without worrying about the underlying dependencies and configurations.

## Docker Compose

We provide a `docker-compose.yml` file that you can use to run Auth-N using Docker Compose.

### Step 1: Create a Directory for Auth-N

Create a new directory for Auth-N and navigate to it:

```bash
mkdir auth-n && cd auth-n
```

### Step 2: Download the Docker Compose File

Download the `docker-compose.yml` file from our GitHub repository: [Auth-N](https://github.com/Neko-Nik/Auth-N)

```bash
curl -o docker-compose.yml https://raw.githubusercontent.com/Neko-Nik/Auth-N/main/examples/docker-compose.yaml
```

:::tip Note
    If you prefer to use a specific version of Auth-N, you can replace `main` with the version tag (e.g., `v1.0.0`). Feel free to navigate to the repository to explore other available versions.
:::


### Step 3: Configure the Environment Variables

Edit the `docker-compose.yml` file to set the required environment variables. You can customize the configuration based on your requirements.

All the available parameters are listed in the `docker-compose.yml` file, and you can modify them as needed. Feel free to explore the file and make changes according to your preferences.

### Step 4: Start Auth-N

Run the following command to start Auth-N using Docker Compose:

```bash
docker-compose up -d
```

This command will download the Auth-N Docker image and start the containers in the background. You can check the logs to ensure that the containers are running correctly.

### Step 5: Access Auth-N

Once the containers are up and running, you can access Auth-N by navigating to `http://localhost:{PORT}/docs` in your web browser. Replace `{PORT}` with the port number specified in the `docker-compose.yml` file.

You should see the Auth-N OpenAPI documentation, which provides details about the available endpoints and how to interact with the API.

That's it! You have successfully installed Auth-N using Docker Compose. You can now start using Auth-N to manage user authentication in your applications.

:::tip Tip From the Author
    Explore the [Auth-N Docker Hub repository](https://hub.docker.com/r/neko7nik/auth-n) for more information about the available Docker images and tags.
:::


## Next Steps

Now that you have installed Auth-N using Docker Compose, you can proceed to add SSL/TLS encryption to secure your API endpoints. Use caddy or nginx as a reverse proxy to handle SSL termination and forward requests to the Auth-N API. This can be done inside the same Docker Compose file.

:::warning Note
    The SSL/TLS encryption is not yet implemented in the current version of Auth-N using Docker Compose. We are working on adding this feature in the upcoming releases. Stay tuned for updates!
:::
