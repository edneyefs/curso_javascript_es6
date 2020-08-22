const users = ['Guilherme', 'Marcos', 'João', 'Antonio', 'Pedro'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Marcos',
        age: 30,
        gender: gender.MAN
    },
    {
        name: 'João',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Antonio',
        age: 33,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 45,
        gender: gender.MAN
    }
];

//Retorna a quantidade de intes de um array
console.log('Itens:', persons.length);

//Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach((persons, index, arr) => {
    console.log('Nome: ${persons.name} index: ${index}', arr);
});


//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista com apenas homens:', mens);

//Retornar um novo
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
})

console.log('\nPessoas com a adiçao do course:', personWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

//Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0);
    reduce((age,person) => {
        age += person.age;
        return age;
    },0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);