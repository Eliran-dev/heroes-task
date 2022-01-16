import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import HeroModel from './schemas/hero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hero', schema: HeroModel}])
  ],
  providers: [HeroService],
  controllers: [HeroController]
})
export class HeroModule {}
