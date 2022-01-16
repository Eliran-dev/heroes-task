import * as mongoose from 'mongoose'
import { Guid } from 'guid-typescript'

const HeroModel = new mongoose.Schema({
    userEmail: String,
    abliity: { type: String, default:"Attacker"},
    id: Number,
    creationDate: {type: Date, default: Date.now()} ,
    suitColors: Array,
    startingPower: Number,
    currentPower: Number,
    


}, { collection: "Heroes",
versionKey: false})

export default HeroModel;