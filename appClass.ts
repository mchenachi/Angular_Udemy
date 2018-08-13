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

import {Spacecraft, ContainerShip} from './base-ships'
import{MilenniumFalcon} from './starfighters'

import * as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40, "="))
//instanciação da Spacecraft
let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

//instanciação da Spacecraft
let falcon = new MilenniumFalcon()
falcon.jumpIntoHyperspace()

//Implementação da interface
let goodForTheJob = (ship: ContainerShip) => ship.cargoContainer > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES':'NO'}`)

 