/* Debemos modelar el comportamiento de una tarjeta Sube. Esta va a tener un identificador, un saldo
y un saldo mínimo (común a todas las tarjetas de - $600).
Una instancia de la clase TarjetaSube debe poder consultar su saldo actual, cargar saldo y pagar un
viaje */

const TarjetaSube=function(){
    this.id=TarjetaSube.ID_GENERAL++;
    this.saldo=0;
    
    this.obtenerSaldo=function(){
        return this.saldo;      // Obtener saldo no rompe el encapsulamiento?
    }

    this.acreditarSaldo=function(montoACargar){
        this.saldo+=montoACargar;
        console.log(`{Tarjeta ${this.id}} Saldo disponible: ${this.obtenerSaldo()} pesos`);
    }

    this.pagarViaje=function(costoViaje){
        const costoEnPesos=costoViaje.aPesos();
        this.validarViaje(costoEnPesos);
        this.saldo-=costoEnPesos;
        console.log(`{Tarjeta ${this.id}} Pago exitoso.\nSaldo disponible: ${this.obtenerSaldo()} pesos`);
    }

    this.validarViaje=function(costoEnPesos){
        if(this.saldo-costoEnPesos <= TarjetaSube.SALDO_MIN){
            throw new Error("Saldo insuficiente.");
        }
    }

    this.soVo=function(idRecarga){
        return this.id===idRecarga;
    }

}

TarjetaSube.SALDO_MIN=-600;
TarjetaSube.ID_GENERAL=0;
module.exports = TarjetaSube;