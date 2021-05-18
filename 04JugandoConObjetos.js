//actividad a realizar
// ¿Cómo harías print/log de la edad de John?
// ¿Cómo harías print/log del nombre del primer objeto?
// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
// ¿Cómo harías para imprimir el nombre de los mayores de edad?
var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27},{name: "Jose", age: 16}];
// ¿Cómo harías print/log de la edad de John?

console.log(users[1].age);
// ¿Cómo harías print/log del nombre del primer objeto?
console.log(users[0].name);

// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
for (usuario of users) {
    console.log(usuario.name,"-",usuario.age);
    
}
// ¿Cómo harías para imprimir el nombre de los mayores de edad?
for (usuario of users) {
    if(usuario.age >= 18){
        console.log("Es mayor de edad",usuario.name,"-",usuario.age);
    }   
}