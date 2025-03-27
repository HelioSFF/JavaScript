let fruits = ['uva','maça','banana','pera','mamão']
console.log(fruits[2])
fruits.push("ameixa")
fruits.unshift('carambola')
fruits.pop()
console.log(fruits)
let numbers = [1,2,3,4,5,6,7,8,9,10]
let double = numbers.map(x => x*2)
console.log(double)
let ages = [20,21,22,23,24,25,26,27,28,29,30]

function acimaDeVinteECinco(age){
    return age >= 25;
}

let resultado = ages.filter(acimaDeVinteECinco)

console.log(resultado)