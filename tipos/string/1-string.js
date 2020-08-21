//Retorna o tamamnho de uma string
const textSide = 'Texto'.length;
console.log('Quantidade de letras: ${textSide}');

//Retorna um array quebrando uma string por um delimitados
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições saparadas pelo delimitador:', splittedText);

//Busca um valor e substitui por outro
const replaceText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replaceText);

//Retorna a "fatia" de um valor
const lasChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string:', lasChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBerforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são:', twoCharsBerforeFirstPos);
