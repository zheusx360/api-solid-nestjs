import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export interface Game extends Document {
   readonly _id: mongoose.Schema.Types.ObjectId
   readonly title: string,
   readonly genre: string,
   readonly publisher: string,
   readonly language: string,
   readonly releaseYear: number,
   readonly classification: number
}