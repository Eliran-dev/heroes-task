import { Equals, IsArray, IsNotEmpty, IsNumber, Matches } from "class-validator";
import { Guid } from "guid-typescript";

class CreateHeroDTO {

     userEmail: String;


    @Matches(/^(defender|attacker)$/,
    {message: 'ability must be attacker or defender'})

    readonly ability: String;





    readonly id:Number;

    readonly creationDate: Date;

    readonly suitColors: String[];

    readonly startingPower: Number;

    readonly currentPower: Number;
}
export default CreateHeroDTO;