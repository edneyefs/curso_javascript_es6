(() => {
    let test = 'valor da função';
    console.log('Valor dentro da função "${test}"');

    if (true){
        let test = 'valor if';
        console.log('Valor dentro da if "${test}"');
    }

    console.log('Valor após a execução do if "${test}"');
})();