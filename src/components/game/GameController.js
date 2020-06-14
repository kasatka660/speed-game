import FieldController from "../field/FieldController";
import GameView from "./GameView";
import Game from "./Game";
import EnemiesController from "../enemy/EnemiesController";

export default class GameController {
    constructor(drawService) {
        this.drawService = drawService;
    }

    initGame() {
        this.game = new Game();
        new GameView(this.game, this.drawService);
        this.fieldController = new FieldController(this.drawService);
        this.fieldController.createField();
        this.speedUp();
        this.createEnemis()
        setInterval(() => {
            this.speedUp();
        }, this.game.roundLength);
    }

    speedUp() {
        if (this.interval) {
            clearInterval(this.interval);
            clearInterval(this.enemiesInterval)
        }
        if (this.game.speed > 100) {
            this.game.speed -= 100;
        }
          this.interval = setInterval(() => {
            this.fieldController.moveRoad();
        }, this.game.speed);

        this.enemiesInterval = setInterval(() => {
            this.enemiesController.moveEnemies();
        }, this.game.speed / 2);
    }

    createEnemis() {
        this.enemiesController = new EnemiesController(this.drawService);
        this.enemiesController.createEnemies();
    }

}