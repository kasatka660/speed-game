import sizes from "../../constants/sizes";

export default class Field {
constructor() {
    this.brickSize = sizes.brickSize;
    this.fieldBricksCountX = sizes.fieldBricksCountX;
    this.fieldBricksCountY = sizes.fieldBricksCountY;
    this.width = this.brickSize*this.fieldBricksCountX;
    this.height = this.brickSize*this.fieldBricksCountY;
    this.offset = 0;
}


}