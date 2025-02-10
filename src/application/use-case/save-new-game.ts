import { Inject } from "@nestjs/common";
import { IGamesRepository, USER_REPOSITORY_TOKEN } from "src/domain/repositories/games.repository";
import { GamesDTO } from "src/application/dto/games.dto";
import { Game } from "src/model/interfaces/games.interface";

export class SaveGameUseCase {
   constructor(@Inject(USER_REPOSITORY_TOKEN) private readonly gameRepository: IGamesRepository) { }

   async execute(newGame: GamesDTO): Promise<Game> {
      return this.gameRepository.saveGame(newGame)
   }
}