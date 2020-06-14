import Field from "./Field";
import FieldView from "./FieldView";

export default class FieldController {
    constructor(drawService) {
        this.drawService = drawService;
    }

    createField() {
        this.field = new Field();
        this.fieldView = new FieldView(this.field, this.drawService);
        this.fieldView.drawFieldBase();
    }

    moveRoad() {
        this.field.offset = (this.field.offset +1)%4;
        this.fieldView.drawRoad();
    }


}