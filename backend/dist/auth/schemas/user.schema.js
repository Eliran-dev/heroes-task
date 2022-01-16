"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const UserModel = new mongoose.Schema({
    email: { type: String, unique: true, required: true, uniqueCaseInsensitive: true },
    password: { type: String, required: true },
    id: Number
}, {
    collection: "Users",
    versionKey: false,
    _id: false
});
UserModel.plugin(uniqueValidator, { message: 'mongoose-unique-validator' });
exports.default = UserModel;
//# sourceMappingURL=user.schema.js.map