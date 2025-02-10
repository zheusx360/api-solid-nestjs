import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose"
import { GameController } from "./infra/controllers/game.controller";
import { SaveGameUseCase } from "./application/use-case/save-new-game";
import { USER_REPOSITORY_TOKEN } from "src/domain/repositories/games.repository"
import { MongoGameRepository } from "./infra/repositories/mongo-game.repository";
import { GameSchema } from "./domain/entities/game.entity";
import { GetAllGamesUseCase } from "./application/use-case/get-all-games";

@Module({
   imports: [
      MongooseModule.forRoot('mongodb+srv://gamesapi:gamesapi2025@cluster0.cplqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
      MongooseModule.forFeature([{ name: 'games', schema: GameSchema }])
   ],
   controllers: [GameController],
   providers: [SaveGameUseCase, GetAllGamesUseCase, { provide: USER_REPOSITORY_TOKEN, useClass: MongoGameRepository }],
   exports: [USER_REPOSITORY_TOKEN]
})
export class AppModule { }