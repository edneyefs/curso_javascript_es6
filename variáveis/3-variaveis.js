/*
const name = 'Edney';

//não pode alterar o valor
//name = 'Edney';

const user = {
    name: 'Edney'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
//user = {
    name: 'Edney'
};
*/

const persons = ['Edney', 'Pedro', 'Jennifer'];

//podemos adicionar novos itens
persons.push('João');

//podemos remover algum item
persons.shift();

//podemos alterar diretamente
persons[1] = 'James';

console.log('\n Array após as alterações: ', persons);
