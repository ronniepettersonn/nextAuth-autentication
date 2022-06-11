import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validateUserPermissions } from "../utils/validateUserPermissions";

type UserCanParams = {
    permissions?: string[];
    roles?: string[]
}

export function useCan({ permissions, roles }: UserCanParams) {
    const { isAuthenticated, user } = useContext(AuthContext)

    if (!isAuthenticated) {
        return false;
    }

    const userHasValidPermissions = validateUserPermissions({
        user,
        permissions,
        roles
    })

    return userHasValidPermissions;
}