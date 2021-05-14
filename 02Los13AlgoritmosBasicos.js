//Primer Algoritmo
// Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
// function arrayHasta(x) {
//     var arr = [];
//     for (var i = 1; i <= x; i++) 
//     {
//         arr.push(i)
//     }
//     return arr;
// }
// x = arrayHasta(255);
// console.log(x);

//Segundo Ejercicio
// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
// function sum_pares(){
//     var sum = 0;
//     for(var i=1;i<=1000;i++)
//     {
//         if(i%2===0){
//             sum +=i;
//         }
//     }
//     return sum;
// }
// console.log(sum_pares());

//Ejercicio 3
// Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
// function sum_impar(){
//     var sum = 0;
//     for(var i=1; i<=5000;i++)
//     {
//         if(i%2!==0){
//             sum += i;
//         }   
//     }
//     return sum;
// }
// console.log(sum_impar())

//Ejercicio 4
// Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
// function iterArr(arr){
//     var sum = 0;
//     for(var i=0; i< arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum;
// }

// console.log(iterArr([1,2,3,4,5]))

//Ejercicio 5
// Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
// function mayorArr(x){
//     var mayor = x[0];
//     for(var i = 0; x.length>i; i++){
//         if(x[i]>mayor){
//             mayor = x[i]
//         }
//     }
//     console.log("el numero mayor del arreglo es",mayor);
//     return mayor
// }
// mayorArr([-3,3,5,7,15] );


//ejercicio 6
// Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
// function avg(arr){
//     let sum = 0;
//     for(var i =0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     let prom = sum/(arr.length);
//     console.log("el promedio es",prom);
//     return prom;
// }
// avg([1,3,5,7,20,20,20]);


//Ejercicio 7
// Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
// function arrImp(){
//     var arr=[];
//     for(let i = 1; i<=50; i++){
//         if(i%2!==0){
//             arr.push(i);
//         }
//     }
//     console.log("el array obtenido es",arr);
//     return arr;
// }
// arrImp();
//Ejericio 8
// Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
// function mayorQueY(arr, b){
//     let x = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > b) {
//             x += 1;
//         }
//     }
//     console.log("Existen", x, "numeros mayores que", b);
//     return x;
// }
// mayorQueY([1, 3, 5, 7], 3);

//Ejercicio 9
// Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
// function sqrtArr(arr){
//     for(let i = 0; i<arr.length; i++){
//         arr[i]=arr[i]*arr[i];
//     }
//     console.log(arr);
//     return arr;
// }
// sqrtArr([1,2,3,3,60,78]);

//Ejercicio 10
// Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
// function arrCero(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = 0;
//             sum += 1;
//         }
//     }
//     console.log("se han reemplazado", sum, "valores negativos por 0, obteniendo el siguiente arreglo: ", arr);
//     return arr;
// }
// arrCero([-1, -2, 3, -5, 4, -5]);


//Ejericicio 11
// Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
// function maxMinavg(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     let sum = 0;
//     let x = [];
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         // console.log(sum);
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if(arr[i]<min){
//             min = arr[i];
//         }

//     }
//     let avg = sum/arr.length;
//     x.push(max);
//     x.push(min);
//     x.push(avg);
//     console.log("los valores [ Max, Min, Promedio] son:",x);
//     return x    
// }
// maxMinavg([1,2,3])


//Ejercicio 12
// Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
// function primerxultimo(arr){
//     let x = arr[0];
//     let y = arr[arr.length-1];
//     arr[0] = y;
//     arr[arr.length-1]=x;
//     console.log("hemos cambiado el ultimo por el primero y el primero por el ultimo ",arr);
// }
// primerxultimo([1,2,3,4,5,6,7,8]);

// Ejercicio 13
// De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
// function arrCero(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = 'Dojo';
//             sum += 1;
//         }
//     }
//     console.log("se han reemplazado", sum, "valores negativos por el string Dojo, obteniendo el siguiente arreglo: ", arr);
//     return arr;
// }
// arrCero([-1, -2, 3, -5, 4, -5]);