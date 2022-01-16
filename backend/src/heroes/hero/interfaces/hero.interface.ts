import { Guid } from "guid-typescript";
import { Document } from "mongoose";

interface Hero extends Document {
    readonly userEmail: String;
    readonly ability: String;
    readonly id:Number;
    readonly creationDate: Date;
    readonly suitColors: String[];
    readonly startingPower: Number;
    readonly currentPower: Number;
}

export default Hero;