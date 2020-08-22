const user = {
    name: 'Edney',
    lastName: 'Ferreira Silva'
};

//Recupera as chaves do objeto
console.log('Propriedade do objeto user:', Object.keys(user));

//Recupera o valor das chaves do objeto
console.log('\nValores das propriedade do objeto user:', Object.values(user));

//retorna um array de arrays contento [nome_prop, valor-prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Margear propriedades de objetos
Object.assign(user, {fullName: 'Edney Ferreira Silva'});

console.log('\nAdiciona a propriedade fullName no objeto user:', user);
console.log('\nRetorna um novo objeto margeado dois ou mais objetos:', Object.assign({}, user, {age: 26}));

//Previne todas as alterações em um objeto
const newObj = { foo: 'Bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável após as alterações:', newObj);

//Permite apenas a lateração de propriedades exitemntes em um objeto
const person = {name: 'Edney'};
Object.seal(person);

person.name = 'Edney Silva';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person);