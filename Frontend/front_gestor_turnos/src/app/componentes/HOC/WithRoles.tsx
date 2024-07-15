import { useRouter } from "next/navigation";

export default function withRoles(Componente: any, permisosRequeridos: number[], goBackRoute: string) {
    return function whitRolesWrapper(props: any) {
        const router = useRouter();
        const tienePermiso = tienePermisosRequeridos(permisosRequeridos);
        if (tienePermiso) {
            return <Componente {...props} />
        } else {
            router.push(goBackRoute);
            return null;
        }
    }
}
function tienePermisosRequeridos(permisosRequeridos: number[]): boolean {
    try {
        const jwt = require('jsonwebtoken');
        const permisosDeUsuario: number | null = jwt.decode(sessionStorage.getItem('token')).rolId;
        if (permisosDeUsuario != null) {
            return permisosRequeridos.some((permiso) => permisosDeUsuario === permiso);
        };
        return false;
    } catch (error) {
        return false;
    };
}
