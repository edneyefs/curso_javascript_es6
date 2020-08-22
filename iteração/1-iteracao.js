//forEach - Iteração de casa item dentro de um array

const frutas = ['melancia', 'acerola', 'laranja', 'amora'];

frutas.forEach((fruta, index, arr) => {
    console.log(index, fruta);
    console.log(index, fruta, arr);
});

//map - Retorna um novo array, de mesmo tamanho, iterando cada item de um array
const arr = [1, 2, 3, 4, 5];
console.log(arr)
console.log(arr.map(value => value * 2))

//flat - Retorna um  novo array com todos os elementos de um sub-array concatenados de forma recursica de acordo com a profundidade especificada(depth)
const arr = [1, 2, [3, 4,]];
console.log(arr.flat())

const idades = [20, 34, [35, 60, [70, 40]]];
console.log(idades.flat())
console.log(idades.flat(2))

//flatMap - Retorna um novo array assim como a função map e executa um flat de profundidade 1.
const arr = [1, 2, 3, 4];
console.log(arr.flatMap(value => [value * 2]))
console.log(arr.flatMap(value => [[value * 2]]))

//keys - Retorna um Array Iterator que contém as chaves para cada elemento do array
const arr = [1, 2, 3, 4];
const arrIterator = arr.keys();
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

//entries - Retorna umArray Iterator que contém os pares chave/valor para cada elemento do array
const arr = [1, 2, 3, 4];
const arrIterator = arr.values();
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

//find - Retorna o primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4];
const firstGreaterThanTwo = arr.find(value => value > 2);
console.log(firstGreaterThanTwo)

//findIndex - Retorna o índice do primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4];
const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);
console.log(firstIndexGreaterThanTwo)

//filter - Retorna um novo array com todos os elementos que satisfazem a condição
const arr = [1, 2, 3, 4];
const allValuesGreaterThanTwo = arr.filter(value => value > 2);
console.log(allValuesGreaterThanTwo)

//indexOf - Retorna o primeiro índice em que o novo elemento pode ser encontrado no array
const arr = [1, 3, 3, 4, 3];
const firstIndexOfItem = arr.indexOf(3);
console.log(firstIndexOfItem)

//lastIndexOf - Retorna o último índice em que um elemento pode ser encontrado no array
const arr = [1, 3, 3, 4, 3];
const lastIndexOfItem = arr.lastIndexOf(3);
console.log(lastIndexOfItem)

//includes - Retorna um booleano verificando se determinado elemento existe no array
const arr = [1, 3, 3, 4, 3];
const hasItemOne = arr.includes(1);
console.log(arr)
console.log('O array tem o numero 1? ', hasItemOne)
console.log('O array tem o numero 2? ', arr.includes(2))
console.log('O array tem o numero 3? ', arr.includes(3))

//some - Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
const arr = [1, 3, 3, 4, 3];
console.log(arr)
console.log('O array tem numero par? ', arr.some(value => value % 2 === 0))
console.log('O array tem numero ímpar? ', arr.some(value => value % 2 !== 0))

const students = [
    {
        nome: 'Edney',
        grade: 8
    },
    {
        nome: 'Juliana',
        grade: 10
    },
    {
        nome: 'Marcos',
        grade: 5
    }
];
console.log(students)
console.log('Media para aprovação = 7')
console.log('Tem algum aluno reprovado?', students.some(students => students.grade < 7))
console.log('Qual?', students.find(student => student.grade < 7))


//every - Retorna um booleano verificando se todos os itens de um array satisfazem a condição
const arr = [1, 3, 3, 4, 3];
console.log(arr)
console.log('O array tem todos os numero pares? ', arr.every(value => value % 2 === 0))
console.log('O array tem todos os numero ímpares? ', arr.every(value => value % 2 !== 0))


//sort - Ordena os elementos de um array de acordo com a condição
const arr = [1, 3, 2, 5, 4];
console.log(arr.sort())

const students = [
    {
        nome: 'Edney',
        grade: 8
    },
    {
        nome: 'Juliana',
        grade: 10
    },
    {
        nome: 'Marcos',
        grade: 5
    }
];
const sortArrayDown = students.sort((current, next) => current.grade - next.grade);
const sortArrayUp = students.sort((current, next) => next.grade - current.grade);

console.log('Ordenando em forma do menor para o maior fica:', sortArrayDown)
console.log('Ordenando em forma do maior para o menor fica:', sortArrayUp)

//reverse - Inverte os elementos de um array
const arr = [1, 3, 2, 5, 4];
console.log(arr.sort())
console.log(arr.reverse())
//ou
console.log(arr.sort().reverse())

//join - Juntar todos os elementos de um array, separados por um delimitador e retorna uma strig
const arr = [1, 2, 3, 4, 5];
console.log(arr.join(' - '))

//reduce - Retorna um novo tipo de dado iterando cada posição de um array
const arr = [1, 2, 3, 4, 5];
console.log(arr)
console.log('A somatória dos números da array é = ', arr.reduce((total, value) => total += value, 0))
