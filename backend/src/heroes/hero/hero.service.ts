import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import  Hero  from './interfaces/hero.interface';
import CreateHeroDTO from './dto/createHero.dto';


@Injectable()
export class HeroService {
    constructor(@InjectModel('Hero') private readonly heroModel: Model<Hero>) {}
    async addHero(CreateHeroDTO: CreateHeroDTO): Promise<Hero> {
        const hero = new this.heroModel(CreateHeroDTO);
        return await hero.save();
    }
    async getAllHeroes(): Promise<Hero[]> {
        const heroes = await this.heroModel.find().exec();
        return heroes;
    }

    async findHeroById(id: number): Promise<Hero> {
        const hero = await this.heroModel.findById(id).exec();
        return hero;
    }

    async getUserHeroes(email: string): Promise<Hero[]> {
        const heroes = await this.heroModel.find({userEmail: email}).exec();
        console.log(heroes)
        return heroes;
    }    
}
