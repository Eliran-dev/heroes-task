import { Document } from "mongoose";
interface User extends Document {
    email: string;
    password: string;
    readonly id: Number;
}
export default User;
