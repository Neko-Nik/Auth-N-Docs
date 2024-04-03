---
sidebar_position: 4
---

# Workspace Setup

Before you start contributing to *Auth N*, you need to set up your development environment. This guide will help you set up your development environment to contribute to the project.

:::tip Tip
    Feel free to reach out to us if you need help setting up your development environment. You can always shedule a meeting with us if you need help.
:::


## Setting up Your Development Environment

To get started with development on the *Auth N* project, follow these steps:

### 1. Clone the Repository

Clone the [GitHub repository](https://github.com/Neko-Nik/Auth-N) to your local machine.

### 2. Create an Issue

Create an issue on the GitHub repository to let us know that you are working on a specific task. Follow these steps:

- Create a branch with a meaningful name describing the issue.
- Start working on the issue by making changes to the code.

### 3. Set Up Virtual Environment

Create a virtual environment using Python 3.10 or higher. Execute the following commands:

```bash
python3.10 -m venv .venv
source .venv/bin/activate
```

### 4. Install Dependencies

Install project dependencies by running:

```bash
pip install -r requirements.txt
```

### 5. Create a Local Logs Directory

Create a directory for local logs:

```bash
mkdir logs
```

### 6. Adjust Constants

In the `src/utils/base/constants.py` file, adjust the settings according to your local environment. This file should be self-explanatory.

### 7. Run the Application

Run the application using Uvicorn or Gunicorn:

- Using Uvicorn:

```bash
uvicorn api.main:app --reload --port 8086
```

- Using Gunicorn:

```bash
gunicorn -k uvicorn.workers.UvicornWorker api.main:app
```

### 8. Access OpenAPI Documentation

Open your browser and go to [http://localhost:8086/docs](http://localhost:8086/docs) to access the OpenAPI documentation and test the APIs using Swagger UI.

### 9. Issue Reporting

If you encounter any issues during setup or development, feel free to raise an issue on the GitHub repository.

:::tip Tip
    If you feel that the issue is related to security, please reach out to us directly.
:::

### 10. Contribution

After you have completed the development, create a pull request on the GitHub repository. We will review your changes and merge them into the main branch.


:::info Note
    If you have any questions or need help with the setup, feel free to reach out to us. We are here to help you.
:::

By following these steps, you'll have your development environment set up and ready to contribute to the *Auth N* project. Happy coding! 🚀
