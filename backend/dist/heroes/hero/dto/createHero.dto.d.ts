declare class CreateHeroDTO {
    userEmail: String;
    readonly ability: String;
    readonly id: Number;
    readonly creationDate: Date;
    readonly suitColors: String[];
    readonly startingPower: Number;
    readonly currentPower: Number;
}
export default CreateHeroDTO;
