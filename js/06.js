'use strict'

// Condicionales IF
// Si A es igual a B entonces haz algo

var edad = 65;
var nombre = "Cristian"; 
/*
// Operadores relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

if(edad <= 50){
    console.log(nombre+" tiene "+edad+" años, puedes acceder");
    
    if(edad <= 33){
        console.log(nombre+" Todavia eres millenial ");
    }else if(edad >= 60){
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres millenial');
    }
            
    }
else{
        // Es mayor de edad
        console.log(nombre+" tiene "+edad+" años, es Mayor de edad");
    }
/*
// Operadores Lógicos
AND(Y): &&
OR(O): ||
Negación: !
*/

// Negación

var year = 2020
if(year != 2014){
    console.log("El año no es 2014, realmente es: "+year);
}

// AND

if(year >= 2000 && year <= 2021 /*&& year != 2020*/){
    console.log("Estamos en la actualidad");
}else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2008 || (year >= 2020 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("AÑO NO REGISTRADO");
}
    

    
 
 
 
 

