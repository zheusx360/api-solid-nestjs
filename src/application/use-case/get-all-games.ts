import { Inject } from "@nestjs/common";
import { IGamesRepository, USER_REPOSITORY_TOKEN } from "src/domain/repositories/games.repository";
import { Game } from "src/model/interfaces/games.interface";

export class GetAllGamesUseCase {
   constructor(@Inject(USER_REPOSITORY_TOKEN) private readonly gameRepository: IGamesRepository) { }

   async execute(): Promise<Game[]> {
      return this.gameRepository.getAllGames()
   }
}