//in
something in somethingItems

//Arrays

var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;           //Retorna true
3 in arvores;           //Retorna true
6 in arvores;           //Retorna false
"cedro" in arvores      //Retorna false{você deve especificar o número do índice não o valor do índice}
"length" in arvores     //Retorna true(lenght é uma propriedade de Array)

//Objetos predefinidos
"PI" in Math;           //Retorna true
var minhaStrig = new String("coral");
"leght" in minhaStrig;  //Retorna true

//Objetos personalizados
var meucarro = {Marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;    //Retorna true
"modelo" in meucarro;   //Retorna true

//instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //code here
}