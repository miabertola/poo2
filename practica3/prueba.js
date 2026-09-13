const TarjetaSube = require('./TarjetaSube.js');
const { SistemaCentralizado, Recarga } = require('./SistemaCentralizado.js');
const { Moneda, Peso, Libra, Dolar } = require('./Moneda.js');

const sistema = new SistemaCentralizado();
const miTarjeta = new TarjetaSube(); // supongamos que le tocó id = 0
const pesos1250 = new Peso(1250);
const miRecarga = new Recarga(0, pesos1250);
const miTarjeta2= new TarjetaSube();    // suponemos id = 1

sistema.cargarTarjeta(miRecarga);
sistema.acreditarSaldo(miTarjeta);

const pesos500=new Peso(500);
const libra2=new Libra(2);
const libra5=new Libra(5);
const miRecarga2 = new Recarga(1, libra5);

sistema.cargarTarjeta(miRecarga2);

console.log("Pendiente antes de acreditar:", sistema.montoTotalPendiente());

sistema.acreditarSaldo(miTarjeta2);

console.log("Pendiente después de acreditar tarjeta2:", sistema.montoTotalPendiente());
console.log("Acreditado hasta ahora:", sistema.montoTotalAcreditado());

miTarjeta.pagarViaje(pesos500);
miTarjeta2.pagarViaje(libra2);