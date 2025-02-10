import { Schema } from "mongoose";

export const GameSchema = new Schema({
   title: String,
   genre: String,
   publisher: String,
   language: String,
   releaseYear: Number,
   classification: Number
})