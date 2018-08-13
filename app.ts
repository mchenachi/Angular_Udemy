let message: string = "Help me, Obi-wan Kenobi. You're my only hope"
console.log(message)

let episode: number = 4
console.log("This is episode: " + episode)
episode = episode + episode
console.log("The next episode is: " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite droid is: " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}
let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millenniun Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2') 

function inc (speed: number, inc: number = 1): number{
    return speed + inc
}
console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)