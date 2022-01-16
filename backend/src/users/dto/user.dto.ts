import { Equals, IsArray, isNotEmpty, IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";

class UserDTO {

    @IsString()
    email: String;

    @IsString()
    readonly password: String;

    readonly id: Number;

}

export default UserDTO;