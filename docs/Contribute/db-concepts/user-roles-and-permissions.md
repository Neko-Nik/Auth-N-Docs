---
sidebar_position: 6
---

# User Roles and Permissions

Brief introduction to the concept of user roles and permissions. Database Schema Overview and how it is used in the context of user roles and permissions.


## Introduction to Database Schema

In a system where users have different roles and permissions, a well-designed database schema is essential for managing user access effectively. This page explains the database schema for user roles and permissions, outlining the tables, their relationships, and how users interact with them.


### Roles Table

The `roles` table stores information about the different roles available in the system. Each role has a unique identifier (`role_id`), a name (`role_name`), a description (`description`), and a timestamp (`created_at`) indicating when the role was created. The `role_id` column serves as the primary key for the table.

Below is the schema for the `roles` table:

| Column Name | Data Type | Description | Key Details |
|-------------|-----------|-------------|-------------|
| role_id     | string    | Unique identifier for the role | Primary Key |
| role_name | string    | Name of the role | Not Null |
| description | string    | Description of the role | Not Null |
| created_at  | datetime  | Timestamp when the role was created | Not Null |


### Permissions Table

The `permissions` table stores information about the different permissions available in the system. Each permission has a unique identifier (`permission_id`), a name (`permission_name`), a description (`description`), and timestamps (`created_at`, `updated_at`) indicating when the permission was created or last updated. The `permission_id` column serves as the primary key for the table.

The `permission_data` column is a JSON field that can store additional key-value pairs of data related to the permission. This can be used to store metadata or configuration information for the permission.

Schema for the `permissions` table as follows:

| Column Name | Data Type | Description | Key Details |
|-------------|-----------|-------------|-------------|
| permission_id | string | Unique identifier for the permission | Primary Key |
| permission_name | string | Name of the permission | Not Null |
| description | string | Description of the permission | Not Null |
| created_at | datetime | Timestamp when the permission was created | Not Null |
| updated_at | datetime | Timestamp when the permission was last updated | Not Null |
| permission_data | json | Additional data related to the permission | Optional |


### User_Roles Table

The `user_roles` table is a mapping table that associates users with roles. It stores information about which roles are assigned to which users, along with the user who assigned the role and the timestamp when the role was assigned.

Schema for the `user_roles` table as follows:

| Column Name | Data Type | Description | Key Details |
|-------------|-----------|-------------|-------------|
| user_id | string | User identifier of the user | Foreign Key to Users |
| role_id | string | Role identifier of the role | Foreign Key to Roles |
| assigned_by | string | User identifier of the user who assigned the role | Foreign Key to Users |
| assigned_at | datetime | Timestamp when the role was assigned | Not Null |


### Role_Permissions Table

The `role_permissions` table is a mapping table that associates roles with permissions. It stores information about which permissions are assigned to which roles, along with the user who assigned the permission and the timestamp when the permission was assigned.

Schema for the `role_permissions` table as follows:

| Column Name | Data Type | Description | Key Details |
|-------------|-----------|-------------|-------------|
| role_id | string | Role identifier of the role | Foreign Key to Roles |
| permission_id | string | Permission identifier of the permission | Foreign Key to Permissions |
| assigned_by | string | User identifier of the user who assigned the permission | Foreign Key to Users |
| assigned_at | datetime | Timestamp when the permission was assigned | Not Null |

:::tip Note
    We are planning to add `Groups` table in the future to manage user groups and their permissions. Along with *nested groups* functionality. Stay tuned for updates.
:::
