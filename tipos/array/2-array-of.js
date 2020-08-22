//Array.of
const persons = Array.of('John', 'Cris', 'Jenny')

console.log(persons)

const numbersAndStrings = Array.of(1, 2, 'string', 'texto');

console.log(numbersAndStrings)

//Array
const arrWithPosition = Array(3)

console.log(arrWithPosition)

const personsList = Array('Jonh', 'Cris, Jenny')

console.log(personsList)

/*
//Array.from
const divs = document.querySelectorAll('div');
const divArray = Array.from(divs)

console.log(divArray);
*/

//push - adiciona no final do array o novo elemento
const frutas = ['melancia', 'banana', 'abacate'];
frutas.push('laranja', 'acerola');

console.log(frutas)

//pop-remove o último item
const removedItem = frutas.pop();

console.log(removedItem)
console.log(frutas)

//unshift - adiciona no início do array o novo elemento
const frutasUnshift = frutas.unshift('kiwi', 'morango');

console.log(frutasUnshift)
console.log(frutas)

//shift - remove do início do array
const frutasShift = frutas.shift();

console.log(frutasShift)
console.log(frutas)

//concat
const verduras = ['cebola', 'pimentão', 'pepino', 'alface'];
const frutasConcat = frutas.concat(verduras);

console.log(frutasConcat)
console.log(frutas)
console.log(verduras)

//slice
const arr = [1, 2, 3, 4, 5]

console.log(arr.slice(0, 2));
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice(-3));

//splice - altera um array a partir dos parâmetros indicados
const arr = [1, 2, 3, 4, 5]

console.log(arr.splice(2));
console.log(arr)
console.log(arr.splice(0, 0, 'first')); //('', '', '')(1ª onde será alterado 2º O que será alterado 3ºNovo item)
console.log(arr);

