import colors from "../constants/colors";
import sizes from "../constants/sizes";
export default class DrawServiceCanvas {
    constructor() {
        this.brickSize = sizes.brickSize;
        this.fieldBricksCountX = sizes.fieldBricksCountX;
        this.fieldBricksCountY = sizes.fieldBricksCountY;
    }

    initCanvas() {
        const canvas = document.getElementById('tutorial');
        this.ctx = canvas.getContext('2d');
        this.ctx.strokeStyle = colors.primaryLight;
        this.ctx.fillStyle = colors.primary;
    }

    drawRectangle(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    drawBrick(x, y, color, borderColor) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x*this.brickSize + 1, y*this.brickSize + 1, this.brickSize - 2, this.brickSize - 2);
        this.ctx.fillStyle = borderColor;
        this.ctx.fillRect(x*this.brickSize + 4, y*this.brickSize + 4, this.brickSize - 8, this.brickSize - 8);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x*this.brickSize + 8, y*this.brickSize + 8, this.brickSize - 16, this.brickSize - 16);
    }

    drawDarkBrick(x, y) {
        if (y < this.fieldBricksCountY) {
            this.drawBrick(x, y, colors.primaryDark, colors.primary);
        }
    }

    drawBaseBrick(x, y) {
        if (y < this.fieldBricksCountY) {
            this.drawBrick(x, y, colors.primary, colors.primaryLight);
        }
    }
}
