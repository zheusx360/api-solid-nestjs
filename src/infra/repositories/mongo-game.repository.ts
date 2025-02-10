import { BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IGamesRepository } from "src/domain/repositories/games.repository";
import { Game } from "src/model/interfaces/games.interface";

export class MongoGameRepository implements IGamesRepository {
   constructor(@InjectModel('games') private gameModel: Model<Game>) { }
   getAllGames(): Promise<Game[]> {
      const data = this.gameModel.find({}, { __v: false }).sort({ title: +  1 }).exec()
      if (!data) {
         throw new BadRequestException("There are not games registered yet")
      }

      return data
   }

   saveGame(newGame: Game): Promise<Game> {
      const createGame = new this.gameModel(newGame)
      return createGame.save()
   }
}