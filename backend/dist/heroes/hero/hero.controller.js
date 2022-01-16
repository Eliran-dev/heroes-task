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
exports.HeroController = void 0;
const common_1 = require("@nestjs/common");
const createHero_dto_1 = require("./dto/createHero.dto");
const hero_service_1 = require("./hero.service");
let HeroController = class HeroController {
    constructor(heroService) {
        this.heroService = heroService;
    }
    async addHero(req, res, createHeroDTO) {
        console.log(req.user.emai, "(req.user.email");
        createHeroDTO.userEmail = req.user.email;
        const Hero = await this.heroService.addHero(createHeroDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Hero has been created successfully",
            Hero
        });
    }
    async getMyHeroes(req, res) {
        const myHeroes = await this.heroService.getUserHeroes(req.user.email);
        return await res.status(common_1.HttpStatus.OK).json({
            message: "The following are the existed heroes",
            myHeroes,
        });
    }
    async getAllHeroes(req, res) {
        const allHeroes = await this.heroService.getAllHeroes();
        console.log(req.user.email);
        return await res.status(common_1.HttpStatus.OK).json({
            message: "The following are the existed heroes",
            allHeroes,
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, createHero_dto_1.default]),
    __metadata("design:returntype", Promise)
], HeroController.prototype, "addHero", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HeroController.prototype, "getMyHeroes", null);
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HeroController.prototype, "getAllHeroes", null);
HeroController = __decorate([
    (0, common_1.Controller)('heroes'),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroController);
exports.HeroController = HeroController;
//# sourceMappingURL=hero.controller.js.map