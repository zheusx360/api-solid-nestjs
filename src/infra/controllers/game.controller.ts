import { Body, Controller, Get, Post } from "@nestjs/common";
import { SaveGameUseCase } from "src/application/use-case/save-new-game";
import { GamesDTO } from "src/application/dto/games.dto";
import { Game } from "src/model/interfaces/games.interface";
import { GetAllGamesUseCase } from "src/application/use-case/get-all-games";

@Controller('game')
export class GameController {
   constructor(
      private readonly saveUseCase: SaveGameUseCase,
      private readonly getAllGames: GetAllGamesUseCase
   ) { }

   @Get()
   async getAll(): Promise<Game[]> {
      return this.getAllGames.execute()
   }

   @Post()
   async create(@Body() newGame: GamesDTO): Promise<Game> {
      return await this.saveUseCase.execute(newGame)
   }

}