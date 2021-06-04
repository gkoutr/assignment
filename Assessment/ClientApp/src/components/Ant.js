export default class Ant {
    position = [];
    origPosition = [];
    constructor(x, y) {
        this.origPosition.push(x, y);
        this.position.push(x, y)
        this.direction = 0;
    }

    moveForward() {
        if (this.direction === 0) {
            this.position.push(0, -1);
        } else if (this.direction === 1) {
            this.position.push(1, 0);
        } else if (this.direction === 2) {
            this.position.push(0, 1);
        } else if (this.direction === 3) {
            this.position.push(-1, 0);
        }
    }

    reset() {
        this.position = this.origPosition.copy();
        this.direction = 0;
    }
}