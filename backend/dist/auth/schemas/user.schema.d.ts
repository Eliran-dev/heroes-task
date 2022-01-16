import * as mongoose from 'mongoose';
import User from '../interfaces/user.interface';
declare const UserModel: mongoose.Schema<User, mongoose.Model<User, any, any, any>, any, any>;
export default UserModel;
