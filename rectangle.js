class Rectangle {
    length;
    width;

    constructor(lenght, width) {
        this.length = length;
        this.width = width;
    }

    getLenght() {
        return this.length;
    }

    getWidth() {
        return this.width;
    }

    getAcreage() {
        return Math.PI * this.length * this.width;
    }

    getRadius() {
        return Math.PI * (this.width + this.length) * 2;
    }
}

let Rectangle1 = new Rectangle(7, 5);
let lenght = Rectangle1.getLenght();
let width = Rectangle1.getWidth();
let acreage = Rectangle1.getAcreage();
let radius = Rectangle1.getRadius();
// let area = Rectangle1.getArea();
alert("lenght" + lenght + "width" + width + "acreage" + acreage + "radius" + radius);