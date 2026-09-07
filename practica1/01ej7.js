const personas = ["Lionel Messi", "Rodrigo Depaul", "Emiliano Martinez", "Angel Dimaria",
"Soledad Jaimes", "Yamila Rodriguez", "Florencia Bonsegundo"]; 

const copia=personas.slice();

// a. Ordenar alfabeticamente por nombre
const ordenarNombre=copia.sort((a,b)=> a < b ? -1 : 1);
console.log(ordenarNombre);

// b. Invertir a "Apellido Nombre"
const invertido=personas.map(persona => {
    const espacio= persona.indexOf(" ");
    const nombre= persona.slice(0,espacio);
    const apellido=persona.slice(espacio+1);
    return `${apellido} ${nombre}`;
})
console.log(invertido)

// c. Ordenar la nueva lista alfabeticamente por apellido
const ordenarApellido=invertido.sort((a,b)=> a < b ? -1 : 1);
console.log(ordenarApellido);