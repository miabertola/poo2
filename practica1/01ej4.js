const pilotos = ["Verstappen", "Hamilton", "Russell", "Sainz", "Perez", "Leclerc", "Norris",
"Alonso", "Ocon", "Vettel"]; 

// punto a
const posRussell=pilotos.indexOf("Russell")+1;
console.log(`Russell llego en la posicion: ${posRussell}`);

// punto b
const sexto=pilotos[5];
console.log(`${sexto} llego sexto.`)

// punto c
const conA = pilotos.filter(piloto => piloto.toLowerCase().includes("a"));
console.log(conA);

// punto d
const consulta=["Russell", "Bottas", "Perez"];
const resultado= consulta.map(piloto=> pilotos.includes(piloto));
console.log(resultado);

// punto e
const nuevoOrden= ["Verstappen", "Hamilton", "Russell", "Sainz", "Perez", "Leclerc", "Norris",
"Alonso", "Ocon", "Vettel"];
const [piloto]=nuevoOrden.splice(4,1) // Saco a Perez de la posicion 5
nuevoOrden.splice(1,0,piloto); // lo inserto en la posicion 2
console.log(nuevoOrden);
