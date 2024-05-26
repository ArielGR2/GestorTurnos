"use client"
import { strict } from "assert";
import { resolveObjectURL } from "buffer";
import { useRouter } from "next/navigation";

function tienePermisosRequeridos (permisosRequeridos:string[]): boolean {
    const permisosDeUsuario = ["Administrador", "Nadador", "Profesor" ]
    return permisosRequeridos.some((permiso)=>permisosDeUsuario.includes(permiso))
    }   
    
export default function withRoles(Componente:any, permisosRequeridos: string[], goBackRoute: string) {
    return function whitRolesWrapper(props:any) {
        const router = useRouter();
        const tienePermiso = tienePermisosRequeridos(permisosRequeridos);
        if (tienePermiso) {
            return <Componente {...props} />
        } else{
            router.push(goBackRoute);
            return null;
        }
    }
}
