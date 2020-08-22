let user = {
    name: 'Edney'
};

//Alterando a propriedade de um objeto
user.name = 'outro nome 1';
console.log(user);
user['name'] = 'outro nome 2';
console.log(user);


const prop = 'name';
user[prop] = 'outro nome 3';
console.log(user);

//Criando propriedade
user.lastName = 'Ferreira Silva';
console.log(user);

//Deletando uma propriedade
delete user.name;
console.log(user);