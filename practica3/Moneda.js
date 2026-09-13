const Moneda=function(monto){
    this.monto=monto;
    this.aPesos=function(){
        return this.tasa*this.monto;
    };
    /*
    this.desdePesos=function(){
        return this.monto/this.tasa;
    }
    */  // No usamos este metodo en ninguna parte
}

/*const Peso=function(monto){
    const TASA_FIJA_PESO=1;
    this.monto=monto;
    this.aPesos=function(monto){
        return TASA_FIJA_PESO*monto;
    }
    this.desdePesos=function(monto){
        return monto/TASA_FIJA_PESO;
    }
}
*/

const TASA_FIJA_PESO=1;
const TASA_FIJA_LIBRA=1830;
const TASA_FIJA_DOLAR=1400;

function Peso(monto){
    Moneda.call(this,monto);
    this.tasa=TASA_FIJA_PESO;
}

Peso.prototype=Object.create(Moneda.prototype);
Peso.prototype.constructor=Peso;

function Libra(monto){
    Moneda.call(this,monto);
    this.tasa=TASA_FIJA_LIBRA;
}

Libra.prototype=Object.create(Moneda.prototype);
Libra.prototype.constructor=Libra;

function Dolar(monto){
    Moneda.call(this,monto);
    this.tasa=TASA_FIJA_DOLAR;
}

Dolar.prototype=Object.create(Moneda.prototype);
Dolar.prototype.constructor=Dolar;

module.exports = { Moneda, Peso, Libra, Dolar };
