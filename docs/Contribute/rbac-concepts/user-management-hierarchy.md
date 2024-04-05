---
sidebar_position: 12
---

# User Management Hierarchy


This document outlines the implementation of a hierarchical permission structure using Group and Role-based access control (RBAC) features. By leveraging these concepts, we aim to establish a flexible and granular permission system that facilitates efficient user access and management.


## Group and Role Assignment

- Each user must be assigned to a group. There can't be any users without a group.

- Roles should be defined at the group level. It's recommended to assign roles to groups rather than individual users.

- Users can have roles defined at the user level, in addition to the group roles. In this case, first all the group roles should be merged, and then the user level roles should be merged. User level roles should take precedence over merged group roles.


## Handling Multiple Group Memberships

- Users may be part of multiple groups. The roles assigned to these groups should be merged based on the group hierarchy.

- When accessing a resource, roles should be merged based on the group hierarchy. This ensures that roles are inherited correctly from parent groups to child groups.

- User level roles should then be merged with the group role, with user level roles taking precedence. This ensures that user level roles override group roles.

- The final merged role can be seen as the user's effective role, which determines the user's permissions when accessing resources. (Can be shown in the user profile or when making requests to the API)


## Nested Groups

- Groups can be nested, forming a hierarchical structure. This hierarchy should be considered when merging roles.

- Role merging should consider the group hierarchy, ensuring roles are appropriately inherited from parent groups.


## Role Merging Process

The role merging process can be summarized as follows:

1. **Group Hierarchy Role Merge**:
   
   - Roles are merged based on the hierarchy of groups the user belongs to.
   
   - Roles from parent groups are inherited by child groups and users within those groups.

2. **User Level Role Merge**:
   
   - If a user has roles defined at the user level, they are merged with the group roles.
   
   - User level roles take precedence over group roles.

3. **Final Merged Role**:
   
   - After merging group and user level roles, the user possesses a final merged role.
   
   - This merged role determines the user's permissions when accessing resources.


## Conclusion

By adhering to these guidelines, we can establish a robust user management hierarchy that provides fine-grained control over user access. This hierarchical permission structure enables efficient management of permissions based on roles and group assignments, enhancing security and flexibility within the system.


:::tip Tips
    When designing the hierarchical permission structure, consider periodically auditing group and role assignments to ensure they align with the evolving needs of organization.
:::
