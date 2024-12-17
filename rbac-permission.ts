// I'm using this constant to define the permissions that the user can have as an example
// This constant should be replaced by a database or a file that contains the permissions
const ROLES = {
  admin: ["create:user", "read:user", "update:user", "delete:user"],
  user: ["create:user", "read:user", "update:user"],
  guest: ["read:user"],
};

// Define the types for the roles and permissions
type Role = keyof typeof ROLES;
type Permission = (typeof ROLES)[Role][number];

// Create the permissión user typo
export type User = { roles: Role[]; id: string }; // The user can have more attributes but this is only for an example

// Create a function to check if the user has the permission to do something
export function hasPermission(user: User, permission: Permission): boolean {
  return user.roles.some((role) => ROLES[role].includes(permission));
}
