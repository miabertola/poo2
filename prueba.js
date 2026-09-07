const TarjetaSube = require('./TarjetaSube.js');
const { SistemaCentralizado, Recarga } = require('./SistemaCentralizado.js');

const sistema = new SistemaCentralizado();
const miTarjeta = new TarjetaSube(); // supongamos que le tocó id = 0
const miRecarga = new Recarga(0, 500);

sistema.cargarTarjeta(miRecarga);
console.log(sistema.cantRecargasPendientes());

sistema.acreditarSaldo(miTarjeta);
console.log(sistema.cantRecargasPendientes());
console.log(miTarjeta.obtenerSaldo());