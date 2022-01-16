import {
    Controller, Res, Query, Get, HttpStatus,
    Post, Body, Param, NotFoundException, Put, Delete, Req
} from '@nestjs/common';
import CreateHeroDTO from './dto/createHero.dto';

import { HeroService } from './hero.service';
import { AllowUnauthorizedRequest } from 'src/auth/allowed-routes.strategy';


@Controller('heroes')
export class HeroController {
    constructor(private readonly heroService: HeroService) { }
    @Post('/create')
    async addHero(@Req() req, @Res() res, @Body() createHeroDTO: CreateHeroDTO) {
        console.log(req.user.emai,"(req.user.email")
        createHeroDTO.userEmail = req.user.email;
        const Hero = await this.heroService.addHero(createHeroDTO);
        return res.status(HttpStatus.OK).json({
            message: "Hero has been created successfully",
            Hero
        })
    }

    @Get('')
    async getMyHeroes(@Req() req, @Res() res)
    {
        const myHeroes = await this.heroService.getUserHeroes(req.user.email)
        return await res.status(HttpStatus.OK).json({
            message: "The following are the existed heroes",
            myHeroes,
        })    }

    @Get('/all')
    async getAllHeroes(@Req() req, @Res() res) {
        const allHeroes = await this.heroService.getAllHeroes();
        console.log(req.user.email)
        return await res.status(HttpStatus.OK).json({
            message: "The following are the existed heroes",
            allHeroes,
        })
    }
    


}
