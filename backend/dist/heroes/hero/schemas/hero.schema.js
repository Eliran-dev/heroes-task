"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const HeroModel = new mongoose.Schema({
    userEmail: String,
    abliity: { type: String, default: "Attacker" },
    id: Number,
    creationDate: { type: Date, default: Date.now() },
    suitColors: Array,
    startingPower: Number,
    currentPower: Number,
}, { collection: "Heroes",
    versionKey: false });
exports.default = HeroModel;
//# sourceMappingURL=hero.schema.js.map