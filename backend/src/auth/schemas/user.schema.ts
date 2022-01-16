import * as mongoose from 'mongoose'
import * as uniqueValidator from 'mongoose-unique-validator'
import { Guid } from 'guid-typescript'
import * as bcrypt from 'bcrypt'
import User from '../interfaces/user.interface';

const UserModel = new mongoose.Schema<User>({
    email:  { type: String, unique: true, required: true, uniqueCaseInsensitive: true},
    password: { type: String, required: true},
    id: Number




}, {
    collection: "Users",
    versionKey: false,
    _id: false
})
UserModel.plugin(uniqueValidator,  { message: 'mongoose-unique-validator' })


export default UserModel;