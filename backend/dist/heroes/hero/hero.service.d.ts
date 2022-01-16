import { Model } from 'mongoose';
import Hero from './interfaces/hero.interface';
import CreateHeroDTO from './dto/createHero.dto';
export declare class HeroService {
    private readonly heroModel;
    constructor(heroModel: Model<Hero>);
    addHero(CreateHeroDTO: CreateHeroDTO): Promise<Hero>;
    getAllHeroes(): Promise<Hero[]>;
    findHeroById(id: number): Promise<Hero>;
    getUserHeroes(email: string): Promise<Hero[]>;
}
