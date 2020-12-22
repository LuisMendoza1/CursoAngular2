
// EJERCICIO 3
// Interfaz: Sirven para declarar una estructura de un objeto

export interface Usuario{
    ID: number,
    Nombre: string,
    Apellidos: string,
    Nick: string,
    Email: string,
    Contraseña: string,
    Tipo: UserType
}

export enum UserType{ // Enumerado: lista de posibilidades, en este caso del tipo de usuario
    Administrador,
    Cliente,
    Tecnico
}

export interface LoginResponse {
    success: boolean
    user: User
    token: string
}

export interface User {
    name: string
    avatar: string
    level: number
    points: number
    achivements: any[]
    _id: string
    type: string
    user: string
    email:string

}

