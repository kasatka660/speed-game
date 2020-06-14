import colors from "../../constants/colors";

export default class FieldView {
    constructor(field, drawService)  {
        this.field = field;
        this.drawService = drawService;
        this.drawFieldBase();
    }

    drawFieldBase() {
        this.drawService.drawRectangle(0,0, this.field.width, this.field.height, colors.primaryLight);
        this.drawFieldBricks();
        this.drawRoad();
    }

    drawFieldBricks() {
        for(let i=0; i<this.field.fieldBricksCountX; i++) {
            for(let k=0; k<this.field.fieldBricksCountY; k++) {
                this.drawService.drawBrick(i, k, colors.primary, colors.primaryLight)
            }
        }
    }

    drawRoad() {
        for(let i = this.field.offset-1; i < this.field.fieldBricksCountY; i++) {
            if (i % 4 !== this.field.offset) {
                this.drawService.drawDarkBrick(0, i);
                this.drawService.drawDarkBrick(9, i);
            } else {
                this.drawService.drawBaseBrick(0, i);
                this.drawService.drawBaseBrick(9, i);
            }
        }
    }

}