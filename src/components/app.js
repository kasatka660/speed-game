import DrawService from "../services/drawService";
import GameController from "./game/GameController";

export default class App {
  constructor() {
    this.drawService = new DrawService();
  }

  init() {
    this.drawService.initCanvas();
    const gameController = new GameController(this.drawService);
    gameController.initGame();
  }



}
