'use strict'

// Pruebas con Let y var

//Prueba con var
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

//Prueba con Let
var texto = "Javasript";
console.log(texto); // valor js

if(true){
    let texto = "Javasript 03";
    console.log(texto); // valor 03
}

console.log(texto); // valor js