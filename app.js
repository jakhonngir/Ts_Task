"use strict";
// let fullName: string = 'johon'
// let num: number = 124
// let bool: boolean = true
class Car {
    constructor(model) {
        this.model = model;
    }
    startEngine() {
        console.log(`${this.model} start Engine.`);
    }
    drive(speed) {
        console.log(`${this.model} Driving at ${speed} km/h`);
    }
    fly(speed) {
        console.log(`${this.model} flying at ${speed} km/h`);
    }
}
const bmw = new Car('bmw');
bmw.startEngine();
bmw.drive(270);
const plane = new Car('Plane');
plane.startEngine();
plane.fly(200);
