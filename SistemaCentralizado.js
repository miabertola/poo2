const SistemaCentralizado=function(){
    this.cargasPendientes=[];

    this.cargarTarjeta=function(recarga){
        this.cargasPendientes.push(recarga);
    }

    this.acreditarSaldo=function(tarjeta){
        this.cargasPendientes.forEach(carga=>carga.acreditarMonto(tarjeta));
        this.cargasPendientes=this.cargasPendientes.filter(carga=>!carga.validarSube(tarjeta));
    }
    this.cantRecargasPendientes=function(){
        return this.cargasPendientes.length;
    }
}

const Recarga=function(identificador,monto){
    this.identificador=identificador;
    this.monto=monto;

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