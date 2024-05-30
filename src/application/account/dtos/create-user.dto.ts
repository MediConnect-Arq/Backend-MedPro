import { TypeUser } from "src/domain/account/models/type-user.model";

export class CreateUserDto {
    first_name: string;
    last_name: string;
    photo? : string;
    email: string;
    password: string;
    type_user_id: number;
    type_user: TypeUser;
}