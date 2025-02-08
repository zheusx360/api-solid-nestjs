import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { GamesDTO } from "src/dto/games.dto";

@Controller('games')
export class GamesController {

   @Get()
   getAllbooks(): string {
      return 'todos os games da lista'
   }

   @Post()
   saveNewGame(@Body() newGame: GamesDTO): GamesDTO {
      return newGame
   }

   @Patch()
   updateGame(): string {
      return 'Game atualizado com sucesso!'
   }

   @Delete()
   deleteGame(): string {
      return 'Game apagado com sucesso!'
   }

}