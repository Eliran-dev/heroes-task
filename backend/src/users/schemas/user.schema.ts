import * as mongoose from 'mongoose'
import { Guid } from 'guid-typescript'
import * as uniqueValidator from 'mongoose-unique-validator'
const UserModel = new mongoose.Schema({
    email:  { type: String, required: true, unique: true, uniqueCaseInsensitive: true},
    password: String,
    id: Number




}, {
    collection: "Users",
    versionKey: false
})
UserModel.plugin(uniqueValidator, {message: 'Error, email is already registered in the system'})
export default UserModel;