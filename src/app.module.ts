import { Module } from "@nestjs/common";
import { GamesController } from "./controllers/games.controller";

@Module({
   imports: [],
   controllers: [GamesController],
   providers: []
})
export class AppModule { }