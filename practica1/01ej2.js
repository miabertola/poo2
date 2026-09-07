/* Escribir una función creaResta que reciba por parámetro un entero x y devuelva otra
función que recibe como parámetro un entero y. Esta segunda función devuelve la resta:
y - x
Crear una variable llamada resta a partir de la función creaResta enviando como parámetro
un numero entero n.
Ejecutar la función resta enviándole un numero entero m.
¿x toma el valor de n e y toma el valor de m, o es al revés? */

function creaResta(x){
    return function (y){
        return y-x;
    };
}

const n=10;
const resta= creaResta(n); // x toma el valor de n

const m=3;
const resultado=resta(m);

console.log(resultado);

/* version corta */
// const crearResta = x => y => y - x;