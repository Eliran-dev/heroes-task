import { Document } from "mongoose";

interface User extends Document {
    readonly email: String;
    readonly password: String;
    readonly id: Number;


}

export default User;