import CreateHeroDTO from './dto/createHero.dto';
import { HeroService } from './hero.service';
export declare class HeroController {
    private readonly heroService;
    constructor(heroService: HeroService);
    addHero(req: any, res: any, createHeroDTO: CreateHeroDTO): Promise<any>;
    getMyHeroes(req: any, res: any): Promise<any>;
    getAllHeroes(req: any, res: any): Promise<any>;
}
