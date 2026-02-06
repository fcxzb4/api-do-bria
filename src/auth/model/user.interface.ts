import {Role} from './role.enum'

export interface UserI {
    id:number  ,
    name:string   ,
    email:string   ,
    password:Role[],    
}