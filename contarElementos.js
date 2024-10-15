//Escribe una función repetidos() que tome un array y devuelva otro array especificando el número de veces que se repite cada elemento del primer array.

//Por ejemplo:
//Si la entrada es [2, 3, 2, 2] la salida debe ser [3, 1]
//Si la entrada es [1, 1, 1] la salida debe ser [3]
//Si la entrada es [2, 3, 3, 2] la salida debe ser [2, 2]

let cadena1=[2,3,2,2];
let cadena2 =[1,1,1];
let cadena3 =[2,3,3,2];

function contar(arr){
    const conteo = {};

    // Contamos las ocurrencias de cada elemento
    for (const num of arr) {
        conteo[num] = (conteo[num] || 0) + 1;
    }

    // Creamos un nuevo array con los conteos
    const resultado = Object.values(conteo);

    return resultado;
}
console.log(contar([2,3,2,2]));
console.log(contar([1,1,1]));
console.log(contar([2,3,2,3]));