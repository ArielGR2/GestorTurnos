"use client"
import { useRouter } from "next/navigation";

function tienePermisosRequeridos (permisosRequeridos:string[]): boolean {
    const permisosDeUsuario = ["Nadador", "Administrador", "Profesor"];
    return permisosRequeridos.some((permiso)=>permisosDeUsuario.includes(permiso))
    }   
    
export default function withRoles(Componente:any, permisosRequeridos: string[], goBackRoute: string) {
    return function whitRolesWrapper(props:any) {
        const router = useRouter();
        const tienePermiso = tienePermisosRequeridos(permisosRequeridos);
        if (tienePermiso) {
            console.log("Tiene permiso: ", tienePermiso);
            return <Componente {...props} />

        } else{
            alert("No tiene permiso, debe loguearse nuevamente");
            router.push(goBackRoute);
            return null;
        }
    }
}

