---
sidebar_position: 8
---

# User's Perspective

From a user's perspective, these database tables and their relationships would facilitate the management of user roles and permissions within the system.

## User Roles and Permissions

We will now discuss how users interact with the database schema for user roles and permissions, focusing on the key tables and their relationships.


Here's how a user might interact with them:

### Roles Table
   - Users can view a list of available roles in the system along with their descriptions.
   - They may be able to create new roles if they have the necessary permissions.
   - Users with appropriate privileges can update or delete existing roles.

### Permissions Table
   - Users can see a list of permissions and their descriptions.
   - They might not directly interact with permission data stored in JSON format, but they can understand what each permission entails.
   - Some users, typically administrators or role managers, might have the authority to create, update, or delete permissions.

### User_Roles Table
   - Users can view their assigned roles within the system.
   - They may have the ability to request additional roles or have roles assigned to them by administrators or role managers.
   - Users can see who assigned them a particular role and when it was assigned.

### Role_Permissions Table
   - Users can understand which permissions are associated with their assigned roles.
   - They might not directly interact with this table, but they benefit from the permissions granted to their roles.
   - Users can potentially request additional permissions from administrators or role managers if needed for their tasks.

Overall, these tables and their relationships provide users with clarity on their roles and permissions within the system, allowing them to effectively perform their tasks based on their assigned roles and associated permissions.

:::info Conceptual Overview
- Users will have controlled access to the system based on their assigned roles and permissions.
- Fine-grained access control can be achieved by managing roles and permissions effectively.
- Multiple administrators or role managers can collaborate to assign roles and permissions to users.
:::
