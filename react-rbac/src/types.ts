import { Role } from "../../rbac-permission";
export type User = { roles: Role[]; id: number; user: string; pass: string };
