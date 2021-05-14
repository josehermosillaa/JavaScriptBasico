//Ejercicio 1
// Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
// function tamañoBig(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>0){
//             arr[i] = 'big';
//             sum +=1;
//         }
//     }
//     console.log(" se han encontrado ", sum, "numeros positivos que han sidos reemplazados : ", arr);
// }
// tamañoBig([1,2,3,-5,4]);

//Ejercicio 2
// Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
// function menorMayor(x){
//     let men = x[0];
//     let may = x[0];
//     for(let i = 0; i<x.length;i++){
//         if(x[i]> may){
//             may=x[i];
//         }
//         if(x[i]<men){
//             men = x[i];
//         }
//     }
//     console.log("el menor numero es ",men,"y el mayor sera retornado");
//     return may;
// }
// z = menorMayor([1,2,3,4,-4,-67]);
// console.log(z);

//ejercicio 3
//Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
// function ImpDevotro(arr){
//     console.log(arr[arr.length-2]);
//     for(let i=0;i<arr.length;i++ ){
//         if(arr[i]%2!==0){
//             return arr[i];
//             break 
//         }
//     }
// }
// z=ImpDevotro([4,6,8,2,3,1,3,5,4]);
// console.log(z);

//Ejercicio 4
//Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
// function arrayx2(arr){
//     for(let i = 0; i<arr.length;i++){
//         arr[i] = 2*arr[i];    
//     }
//     console.log("el array duplicado será", arr);
//     return arr;
// }
// arrayx2([1,3,4,5,6,7]);


//Ejercicio 5
//Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
// function contarYagregar(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>0){
//             sum += 1;
//         }
//     }
//     arr[arr.length-1]=sum;
//     console.log("se encontraron ",sum," valores positivos, obteniendo el arreglo: ",arr);
//     return arr;
// }

// contarYagregar([1,2,4,-4,-6,5]);

//Ejercicio 6
// Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
// function paresImpares(arr){
//     for(let i = 0; i<arr.length-2;i++){
//         //si no dejo la condicion con el -2 me produce problemas** preguntar
//         if(arr[i]%2!==0 && arr[i+1]%2!==0 && arr[i+2]%2!==0){
//             console.log("¡Que imparcial!");
//         }
//         else if(arr[i]%2=== 0 && arr[i+1]%2===0 && arr[i+2]%2===0){
//             console.log("¡Es para bien!");
//         }
//     }
// }
// paresImpares([1,2,3,4,4,4,5,7,9,2,4,6,7,9,11]);

//Ejercicio 7
//Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 
// function incrementaSeg(arr){
//     for(let i = 1; i<arr.length;i+=2){
//         arr[i]=arr[i]+1;
//         console.log("se ha sumado 1 al elemento con indice ",i,"obteniendo: ",arr[i]);
//     }
//     return arr
// }

// z= incrementaSeg([1,3,4,6,7,8]);
// console.log(z);

//Ejercicio 8
//Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
// function longPrev(arr){
//     for(let i = arr.length-1; i!=0;i--){
//         arr[i]=arr[i-1].length;
//     }
//     console.log(arr);
//     return arr
// }

// longPrev(["programar","dojo","genial"]);

//Ejercicio 9
//Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
// function agregaSiete(arr){
//     let x = []
//     for(let i = 0; i<arr.length; i++){
//         x.push(arr[i] +7);
//     }
//     console.log("se tomo el array ", arr," y se le agrego 7 a cada termino obteniendo", x);
//     return x;
// }
// agregaSiete([1,2,3]);

//Ejercicio 10
//Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
// function arrInverso(arr){
//     for(let i = 0; i<arr.length/2;i++){
//         let temporal = arr[i];
//         let indcontrario = arr.length-i-1;
//         arr[i] = arr[indcontrario];
//         arr[indcontrario] = temporal;
//     }
//     console.log("el array invertido será: ",arr);
//     return arr
// }
// var z = arrInverso([1,2,3,4,5,6,7,7,8,9,0]);

//ejercicio 11
//
// Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
// function persNeg(arr){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>0){
//             arr[i]=-1*arr[i];
//         }
//     }
//     console.log("la perspectiva negativa será ", arr);
//     return arr;
// }
// persNeg([1,-4,-5,4]);

//Ejercicio 12
//Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
// function hambriento(arr){
//     let x=[];
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]==="comida"){
//             console.log("yummy");
//             x.push("yummy");
//         }
//     }
//     if(x.length===0){
//         console.log("tengo hambre");
//     }

// }
// hambriento(["comida",2,3,4, "comida"]);

//Ejercicio 13
//Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
// function cambiaHaciaElCentro(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         let temporal = arr[i];
//         let indcontrario = arr.length - i - 1;
//         if(i%2===0){
//         arr[i] = arr[indcontrario];
//         arr[indcontrario] = temporal;
//         }
//     }
//     console.log("si lo cambiamos al centro ", arr);
//     return arr


// }
// cambiaHaciaElCentro([true,42, "Ada", 2,"pizza"]);

//Ejercicio 14
//Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
// function escalaArray(arr,num){
//     for(let i = 0;i<arr.length;i++){
//         arr[i] = num*arr[i];
//     }
//     console.log("el array escalado por ",num, "es igual a ",arr);
//     return arr;
// }
// escalaArray([1,2,3],3);
