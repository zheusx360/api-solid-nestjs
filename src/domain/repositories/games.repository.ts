import { GamesDTO } from "src/application/dto/games.dto";
import { Game } from "src/model/interfaces/games.interface";

export const USER_REPOSITORY_TOKEN = "USER_REPOSITORY"

export interface IGamesRepository {
   getAllGames(): Promise<Game[]>
   saveGame(newGame: GamesDTO): Promise<Game>;
   //updateGame(id: string): Promise<Game>
   //findGameById(id: string): Promise<Game>
   //deleteGame(id: string): Promise<string>
}