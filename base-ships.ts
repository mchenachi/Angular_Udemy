//export transforma as classes em módulos
//pode-se declarar no começo da classe:
//export class Spacecraft{}

class Spacecraft{
    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

interface ContainerShip{
    cargoContainer: number
}

//ou como no exemplo a seguir
export{Spacecraft, ContainerShip}