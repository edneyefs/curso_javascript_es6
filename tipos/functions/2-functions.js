this.name = 'Nome no contexto de criação';

const herNameArrowFn = () => this.name;

function gerName(){
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());