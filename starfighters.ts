import{Spacecraft, ContainerShip} from './base-ships'

export class MilenniumFalcon extends Spacecraft implements ContainerShip{
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