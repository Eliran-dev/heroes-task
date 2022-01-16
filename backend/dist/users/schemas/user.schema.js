"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const UserModel = new mongoose.Schema({
    email: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
    password: String,
    id: Number
}, {
    collection: "Users",
    versionKey: false
});
UserModel.plugin(uniqueValidator, { message: 'Error, email is already registered in the system' });
exports.default = UserModel;
//# sourceMappingURL=user.schema.js.map