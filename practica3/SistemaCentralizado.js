const SistemaCentralizado=function(){
    this.cargasPendientes=[];
    this.cargasAcreditadas=[];

    this.cargarTarjeta=function(recarga){
        this.cargasPendientes.push(recarga);
    }

    this.acreditarSaldo=function(tarjeta){
        this.cargasPendientes.forEach(carga=>carga.acreditarMonto(tarjeta));
        this.cargasAcreditadas=this.cargasAcreditadas.concat(this.cargasPendientes.filter(carga=>carga.validarSube(tarjeta)));
        this.cargasPendientes=this.cargasPendientes.filter(carga=>!carga.validarSube(tarjeta));
    }
    this.montoTotalAcreditado=function(){
        return this.cargasAcreditadas.reduce((acumulado,actual)=> acumulado + actual.monto,0);
    }
    this.montoTotalPendiente=function(){
        return this.cargasPendientes.reduce((acumulado,actual)=> acumulado + actual.monto,0);
    }
}

const Recarga=function(identificador,montoEnMoneda){
    this.identificador=identificador;
    this.monto=montoEnMoneda.aPesos();

    this.validarSube=(tarjeta)=>{
        return tarjeta.soVo(this.identificador);   // yo SI puedo compartir mi atributo, pero no lo puedo pedir
    }
    this.acreditarMonto=function(tarjeta){
        if(this.validarSube(tarjeta)){
            tarjeta.acreditarSaldo(this.monto);
        }
    }
}

module.exports = { SistemaCentralizado, Recarga };

// PREGUNTAR POR EL USO DE SPREAD (...)