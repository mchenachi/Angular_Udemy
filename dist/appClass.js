"use strict";
/*class Spacecraft{
    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

class MilenniumFalcon extends Spacecraft implements ContainerShip{
    cargoContainer: number
    
    constructor(){
        super('hyperdrive')
        this.cargoContainer = 2
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }
        else{
            console.log('Failed to jump into hyperspace')
        }
    }
}

//caso nao queira que o atributo seja obrigatorio na implementacao:
//cargoContainer?:number
interface ContainerShip{
    cargoContainer: number
}*/
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
//instanciação da Spacecraft
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
//instanciação da Spacecraft
var falcon = new starfighters_1.MilenniumFalcon();
falcon.jumpIntoHyperspace();
//Implementação da interface
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
