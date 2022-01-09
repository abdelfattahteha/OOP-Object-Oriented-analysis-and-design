/**
 * 1- Can't create instance of abstract class, just use as super class
 * 2- abstract props and methods only exist in an abstract class
 * 3- sub classes for abstract class must implement abstract props and methods of super class
 */

abstract class Car {
    abstract name: string;

    abstract printCarType() : void;
    drive() {
        console.log(this.name +" is working");
    }

}

class BMW extends Car {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    printCarType() {
        console.log(this.name);
    }
}

var bmw = new BMW('BMW');
bmw.drive();
bmw.printCarType();

function getCar(car: Car) {
    console.log(car);
}
getCar(bmw);



