export default class EnemiesView {
    constructor(enemies, drawService) {
        this.enemies = enemies;
        this.drawService = drawService;
        this.enemiesPosition = this.enemies.positions;
    }

    drawEnemy(x, y) {
        this.enemies.offset.forEach(offset => {
            this.drawService.drawDarkBrick(x + offset.x, y + offset.y);
        })
    }

    drawEnemies() {
        this.enemiesPosition.forEach(enemyPosition => {
            this.drawEnemy(enemyPosition.x, enemyPosition.y)
        })
    }

    clearEnemy(x,y) {
        this.enemies.offset.forEach(offset => {
            this.drawService.drawBaseBrick(x + offset.x, y + offset.y);
        })
    }

    clearEnemies() {
        this.enemiesPosition.forEach(enemyPosition => {
            this.clearEnemy(enemyPosition.x, enemyPosition.y)
        })
    }

}