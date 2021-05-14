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