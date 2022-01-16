"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService, userModel) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.userModel = userModel;
    }
    async login(userDTO) {
        const payload = {
            email: userDTO.email
        };
        const isValid = await this.validateUser(userDTO.email, userDTO.password);
        console.log(isValid + "  s");
        if (isValid) {
            console.log("isValid");
            return {
                access_token: this.jwtService.sign(payload)
            };
        }
        return false;
    }
    async doesUserExists(email) {
        email = email.toLowerCase();
        const isUser = await this.userModel.findOne({ email: email });
        console.log(isUser);
        if (isUser != null) {
            console.log("Found it ");
            return isUser.password;
        }
        return "false";
    }
    async validateUser(email, pass) {
        const user = await this.doesUserExists(email);
        return await bcrypt.compare(pass, user);
    }
    async register(userDTO) {
        console.log(userDTO);
        const user = new this.userModel(userDTO);
        console.log(user.password);
        user.email = user.email.toLowerCase();
        user.password = await bcrypt.hash(user.password, 10);
        console.log(user.password);
        return await user.save().catch((e) => {
            {
                throw new common_1.ConflictException(e.errors.email.message);
            }
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        mongoose_2.Model])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map