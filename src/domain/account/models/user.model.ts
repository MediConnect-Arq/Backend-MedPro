import { TypeUser } from './type-user.model';


export class User {
    id: number;
    first_name: string;
    last_name: string;
    photo?: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at?: Date;
    type_user_id: number;
    type_user: TypeUser;
}