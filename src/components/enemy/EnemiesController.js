import Enemies from "./Enemies";
import EnemiesView from "./EnemiesView";

export default class EnemiesController {
    constructor(drawService) {
        this.drawService = drawService;
    }

    createEnemies() {
        this.enemies = new Enemies();
        this.enemiesView = new EnemiesView(this.enemies, this.drawService);
        this.enemiesView.drawEnemies();
    }

    moveEnemies() {
        this.enemiesView.clearEnemies();
        this.enemies.positions = this.enemies.positions.map(enemy => {
            enemy.y += 1;
            return enemy;
        })
        this.enemiesView.drawEnemies();
    }
}