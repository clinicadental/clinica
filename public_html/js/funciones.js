var oClinica=new Clinica();
window.addEventListener('load',asignarEventos,false);
window.addEventListener('load',calendario1,false);
window.addEventListener('load',calendario2,false);
actualizarSelectSalas();
actualizarSelectMateriales();

/*COMPROBAR RADIO*/
function comprobarRadio(){
    
    var sTipo=document.formPersonal.tipo.value;  
    
    if(sTipo=="1"){
        
        document.getElementById("bloqueAdmin").style.display="block";
	document.getElementById("bloqueDentista").style.display="none";
    }
    else{
        
        if(sTipo=="2"){
            
            document.getElementById("bloqueAdmin").style.display="none";
            document.getElementById("bloqueDentista").style.display="block";
        }
    }
}

/*ASIGNAR EVENTOS*/
function asignarEventos(){
    var oFormCliente=document.getElementById("btnAltaCliente");
    oFormCliente.addEventListener('click', validarCliente, false);
    var oAltaCliente=document.getElementById('altaCliente');
    oAltaCliente.addEventListener('click',mostrarFormAltaCliente,false);
    var oListadoClientes=document.getElementById("listaClientes");
    oListadoClientes.addEventListener('click',listarClientes,false);
    var oBajaCliente=document.getElementById("bajaClientes");
    oBajaCliente.addEventListener('click',mostrarFormBajaCliente,false);
    var oFormBajaCliente=document.getElementById("btnBajaCliente");
    oFormBajaCliente.addEventListener('click', validarBajaCliente, false);
    document.getElementById("nombreCliente").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellidosCliente").addEventListener('keypress',validarSinNumeros,false);
    
    var oFormCita=document.getElementById("btnAltaCita");
    oFormCita.addEventListener('click', validarCita, false);
    var oAltaCita=document.getElementById('altaCita');
    oAltaCita.addEventListener('click',mostrarFormAltaCita,false);
    var oListadoCitas=document.getElementById("listaCitas");
    oListadoCitas.addEventListener('click',listarCitas,false);
    var oBajaCita=document.getElementById("bajaCitas");
    oBajaCita.addEventListener('click',mostrarFormBajaCita,false);
    var oFormBajaCita=document.getElementById("btnBajaCita");
    oFormBajaCita.addEventListener('click', validarBajaCita, false);
    document.getElementById("procedimientoCita").addEventListener('keypress',validarSinNumeros,false);
    
    var oFormProveedor=document.getElementById("btnAltaProveedor");
    oFormProveedor.addEventListener('click', validarProveedor, false);
    var oAltaProveedor=document.getElementById('altaProveedor');
    oAltaProveedor.addEventListener('click',mostrarFormAltaProveedor,false);
    var oListadoProveedores=document.getElementById("listaProveedores");
    oListadoProveedores.addEventListener('click',listarProveedores,false);
    var oBajaProveedor=document.getElementById("bajaProveedores");
    oBajaProveedor.addEventListener('click',mostrarFormBajaProveedor,false);
    var oFormBajaProveedor=document.getElementById("btnBajaProveedor");
    oFormBajaProveedor.addEventListener('click', validarBajaProveedor, false);
    document.getElementById("nombreProveedor").addEventListener('keypress',validarSinNumeros,false);
    
    var oFormMaterial=document.getElementById("btnAltaMaterial");
    oFormMaterial.addEventListener('click', validarMaterial, false);
    var oAltaMaterial=document.getElementById('altaMaterial');
    oAltaMaterial.addEventListener('click',mostrarFormAltaMaterial,false);
    var oListadoMateriales=document.getElementById("listaMateriales");
    oListadoMateriales.addEventListener('click', listarMateriales, false);
    var oBajaMaterial=document.getElementById("bajaMateriales");
    oBajaMaterial.addEventListener('click',mostrarFormBajaMaterial,false);
    var oFormBajaMaterial=document.getElementById("btnBajaMaterial");
    oFormBajaMaterial.addEventListener('click', validarBajaMaterial, false);
   
    var oFormPersonal=document.getElementById("btnAltaPersonal");
    oFormPersonal.addEventListener('click', validarPersonal, false);
    var oAltaPersonal=document.querySelector("#menu-personal .alta");
    oAltaPersonal.addEventListener('click',mostrarFormAltaPersonal,false);
    var radioAdministrativo=document.getElementById("administrativo");
    radioAdministrativo.addEventListener('click', comprobarRadio, false);
    var radioDentista=document.getElementById("dentista");
    radioDentista.addEventListener('click', comprobarRadio, false);
    var oListadoPersonal=document.getElementById("listaPersonal");
    oListadoPersonal.addEventListener('click',listarPersonal,false);
   
    var oBajaPersonal=document.querySelector("#menu-personal .baja");
    oBajaPersonal.addEventListener('click',mostrarFormBajaPersonal,false);
    var oFormBajaPersonal=document.getElementById("btnBajaPersonal");
    oFormBajaPersonal.addEventListener('click', validarBajaPersonal, false);
    
    
    document.getElementById("nombre-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellido-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("nombreCliente").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellidosCliente").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("nombreProveedor").addEventListener('keypress',validarSinNumeros,false);
    
    var oFormPago=document.getElementById("btnAltaPago");
    oFormPago.addEventListener('click', validarPago, false);
    var oAltaPago=document.getElementById('altaPago');
    oAltaPago.addEventListener('click',mostrarFormAltaPago,false);
    var oListadoPagos=document.getElementById("listaPagos");
    oListadoPagos.addEventListener('click',listarPago,false);
    var oBajaPago=document.getElementById("bajaPagos");
    oBajaPago.addEventListener('click',mostrarFormBajaPago,false);
    var oFormBajaPago=document.getElementById("btnBajaPago");
    oFormBajaPago.addEventListener('click', validarBajaPago, false);
    
    var oListadoSalas=document.getElementById("listaSalas");
    oListadoSalas.addEventListener('click',listarSalas,false);
    
    var oBotonMensaje=document.getElementById("btnMensaje");
    oBotonMensaje.addEventListener('click', ocultarMensaje, false);
    
    /*var oBotonConfirmar=document.getElementById("btnConfirmar");
    oBotonConfirmar.addEventListener('click', ocultarConfirmar, false);
    var oBotonCancelar=document.getElementById("btnCancelar");
    oBotonCancelar.addEventListener('click', ocultarConfirmar, false);*/
}


/*----MOSTRAR FORMULARIOS Y LISTADOS----*/
function ocultarTodo(){
    var oFormularios=document.getElementsByClassName("bloque");
    for(var i=0;i<oFormularios.length;i++){
        oFormularios[i].style.display="none";
    }
}
function mostrarFormAltaCliente(){
    ocultarTodo();
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="block";
}
function mostrarFormBajaCliente(){
    ocultarTodo();
    var oFormularioBajaCliente=document.querySelector("#form-baja-clientes");
    oFormularioBajaCliente.style.display="block";
}
function mostrarFormAltaCita(){
    ocultarTodo();
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="block";
}
function mostrarFormBajaCita(){
    ocultarTodo();
    var oFormularioBajaCita=document.querySelector("#form-baja-citas");
    oFormularioBajaCita.style.display="block";
}
function mostrarFormAltaProveedor(){
    ocultarTodo();
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="block";
}
function mostrarFormBajaProveedor(){
    ocultarTodo();
    var oFormularioBajaProveedor=document.querySelector("#form-baja-proveedores");
    oFormularioBajaProveedor.style.display="block";
}
function mostrarFormAltaMaterial(){
    ocultarTodo();
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="block";
}
function mostrarFormBajaMaterial(){
    ocultarTodo();
    var oFormularioBajaMaterial=document.querySelector("#form-baja-materiales");
    oFormularioBajaMaterial.style.display="block";
}
function mostrarFormAltaPersonal(){ 
    ocultarTodo();
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="block";
}
function mostrarFormBajaPersonal(){ 
    ocultarTodo();
    var oFormularioBajaPersonal=document.querySelector("#form-baja-personal");
    oFormularioBajaPersonal.style.display="block";
}
function mostrarFormAltaPago(){
    ocultarTodo();
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="block";
}
function mostrarFormBajaPago(){
    ocultarTodo();
    var oFormularioBajaPago=document.querySelector("#form-baja-pagos");
    oFormularioBajaPago.style.display="block";
}
function mostrarListadoClientes(){
    ocultarTodo();
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="block";
}
function mostrarListadoCitas(){
    ocultarTodo();
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="block";
}
function mostrarListadoProveedores(){
    ocultarTodo();
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="block";
}
function mostrarListadoMateriales(){
    ocultarTodo();
    var oListado=document.querySelector("#listadoMateriales");
    oListado.style.display="block";
}
function mostrarListadoPersonal(){
    ocultarTodo();
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="block";
}
function mostrarListadoPagos(){
    ocultarTodo();
    var oListado=document.querySelector("#listadoPagos");
    oListado.style.display="block";
}
function mostrarListadoSalas(){
    ocultarTodo();
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="block";
}


/*----VALIDAR SIN NÚMEROS----*/
function validarSinNumeros(evento){
    var oEvento = evento || window.event;
    var codigoChar = oEvento.charCode || oEvento.keyCode; 
    var caracter = String.fromCharCode(codigoChar);
    if (caracter == "0" || caracter == "1" || caracter == "2" ||caracter == "3" || 
        caracter == "4" || caracter == "5" || caracter == "6" || caracter == "7" || 
        caracter == "8" ||caracter == "9"){			
            oEvento.preventDefault();
    }
}


/*----VALIDAR CLIENTE----*/
function validarCliente(evento){
    var oEvento = evento || window.event;  
    oEvento.preventDefault();
    if(validarCamposTextoCliente()){
       return true;
    }
    else{
       var oCapaMensaje=document.getElementById("mensajes");
       oCapaMensaje.className="alert alert-danger"; 
       mensaje("error");
       return false;
    } 
}

function validarCamposTextoCliente(){
    var sId=document.getElementById('idCliente').value;
    var sNombre=document.getElementById('nombreCliente').value;
    var sApellidos=document.getElementById('apellidosCliente').value;
    var iTelefono=document.getElementById('telefonoCliente').value;
    var bValido=true;
    var patronId=/(^[A-Z]{1})([0-9]{5}$)/;
    var patronCadena=/[a-zA-Z]+\s?/;
    var patronTelef=/^([0-9]{2,3})?(-|\s)?[0-9]{6,7}$/;
    
    if(!patronId.test(sId)){
        var oBloque=document.getElementById("bloqueIdCliente");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueIdCliente");
        oBloque.className='form-group';
    }
    if(!patronCadena.test(sNombre)){   
        var oBloque=document.getElementById("bloqueNombreCliente");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueNombreCliente");
        oBloque.className='form-group';
    }
    if(!patronCadena.test(sApellidos)){   
        var oBloque=document.getElementById("bloqueApellidosCliente");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueApellidosCliente");
        oBloque.className='form-group';
    }
    if(!patronTelef.test(iTelefono)){   
        var oBloque=document.getElementById("bloqueTelefonoCliente");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueTelefonoCliente");
        oBloque.className='form-group';
    }
    if(bValido){
        var oCliente=new Cliente(sId, sNombre, sApellidos, iTelefono);
        oClinica.altaCliente(oCliente);
        limpiaCampos();
        actualizarSelectCliente();
        var titulo=document.querySelector("#form-alta-clientes h2");
        titulo.removeChild(titulo.firstChild);
        var oTexto=document.createTextNode("Alta cliente");
        titulo.appendChild(oTexto);   
    }
    return bValido;
}

function validarBajaCliente(evento){
    var oEvento = evento || window.event;  
    oEvento.preventDefault(); 
    if(validarCamposBajaCliente()){
       return true;
    }
    else{
       var oCapaMensaje=document.getElementById("mensajes");
       oCapaMensaje.className="alert alert-danger"; 
       mensaje("error");
       return false;
    } 
}

function validarCamposBajaCliente(){
    var oCliente=document.getElementById("bajaCliente");
    var opcion=document.querySelector("#form-baja-clientes input[name='opcion']:checked");
    var bValido=true;
    if(oCliente.selectedIndex=="0"){
        var oBloque=document.getElementById("bloqueBajaCliente");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueBajaCliente");
        oBloque.className='form-group';
    }
    if(bValido){       
            oCliente=oCliente.value;
            oCliente=oClinica.buscaCliente(oCliente);
        if(opcion.value=="2"){
            if(confirm("Cliente a borrar \n\
                    ID: "+oCliente.id+"\n\
                    Nombre: "+oCliente.nombre+"\n\
                    Apellidos: "+oCliente.apellidos+"\n\
                    Teléfono: "+oCliente.telefono+"\n\
                    Está seguro de borrar?")){
                oClinica.bajaCliente(oCliente);
                actualizarSelectCliente(oCliente);
                limpiaCampos();
            }
        }
        else{
            oClinica.bajaCliente(oCliente);
            actualizarSelectCliente(oCliente);
            limpiaCampos();
            mostrarFormAltaCliente();
            var titulo=document.querySelector("#form-alta-clientes h2");
            titulo.removeChild(titulo.firstChild);
            var oTexto=document.createTextNode("Modificar cliente");
            titulo.appendChild(oTexto);
            document.getElementById('idCliente').value=oCliente.id;
            document.getElementById('nombreCliente').value=oCliente.nombre;
            document.getElementById('apellidosCliente').value=oCliente.apellidos;
            document.getElementById('telefonoCliente').value=oCliente.telefono;
        }
    }
    return bValido;
}

function actualizarSelectCliente(){
    
    var oSelect=document.getElementById("clienteCita");
    var oSelect1=document.getElementById("clientePago");
    var oSelect2=document.getElementById("bajaCliente");
    
    while (oSelect.firstChild) {
        oSelect.removeChild(oSelect.firstChild);
    }
    while (oSelect1.firstChild) {
        oSelect1.removeChild(oSelect1.firstChild);
    }
    while (oSelect2.firstChild) {
        oSelect2.removeChild(oSelect2.firstChild);
    }
    
    var oOptionIni=document.createElement("option");
    var oOptionIni1=document.createElement("option");
    var oOptionIni2=document.createElement("option");
    oOptionIni.text="--seleccione un cliente--";
    oOptionIni1.text="--seleccione un cliente--";
    oOptionIni2.text="--seleccione un cliente--";
    oSelect.appendChild(oOptionIni);
    oSelect1.appendChild(oOptionIni1);
    oSelect2.appendChild(oOptionIni2);
    
    
    if(oClinica.clientes.length>0){
        
        for(var i=0;i<oClinica.clientes.length;i++){
            
            var oOption=document.createElement("option");
            var oOption1=document.createElement("option");
            var oOption2=document.createElement("option");
            oOption.value=oClinica.clientes[i].id;
            oOption.text=oClinica.clientes[i].apellidos+", "+oClinica.clientes[i].nombre;
            oOption1.value=oClinica.clientes[i].id;
            oOption1.text=oClinica.clientes[i].apellidos+", "+oClinica.clientes[i].nombre;
            oOption2.value=oClinica.clientes[i].id;
            oOption2.text=oClinica.clientes[i].apellidos+", "+oClinica.clientes[i].nombre;
            oSelect.appendChild(oOption);
            oSelect1.appendChild(oOption1);
            oSelect2.appendChild(oOption2);
        }
    }
    
}

/*----VALIDAR CITA----*/
function validarCita(evento){
    var oEvento = evento || window.event;   
    oEvento.preventDefault();     
    if(validarCamposTextoCita()){      
       return true;
    }
    else{
       var oCapaMensaje=document.getElementById("mensajes");
       oCapaMensaje.className="alert alert-danger"; 
       mensaje("error");
       return false;
    } 
}

function validarCamposTextoCita(){  
    var sId=document.getElementById('idCita').value;
    var oDentista=document.getElementById("dentistaCita");
    var oCliente=document.getElementById("clienteCita");
    var sFecha=document.getElementById("fechaCita").value;
    var sSala=document.getElementById("salaCita");
    var sProcedimiento=document.getElementById("procedimientoCita").value;
    var sDescripcion=document.getElementById("descripcionCita").value;
    var bAtendida=document.getElementById("atendidaCita").checked;
    var bValido=true;
    var patronId=/(^[A-Z]{1})([0-9]{5}$)/;
    var patronCadena=/[a-zA-Z]+\s?/;
    
    if(!patronId.test(sId)){
        var oBloque=document.getElementById("bloqueIdCita");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueIdCita");
        oBloque.className='form-group';
    }
    if(oDentista.selectedIndex=="0"){
        var oBloque=document.getElementById("bloqueDentistaCita");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{ 
        var oBloque=document.getElementById("bloqueDentistaCita");
        oBloque.className='form-group';
    }    
    if(oCliente.selectedIndex=="0"){        
        var oBloque=document.getElementById("bloqueClienteCita");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{       
        var oBloque=document.getElementById("bloqueClienteCita");
        oBloque.className='form-group';
    }  
    if(sFecha==""){        
        var oBloque=document.getElementById("bloqueFechaCita");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{       
        var oBloque=document.getElementById("bloqueFechaCita");
        oBloque.className='form-group';
    }   
    if(sSala.selectedIndex=="0"){      
        var oBloque=document.getElementById("bloqueSalaCita");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{        
        var oBloque=document.getElementById("bloqueSalaCita");
        oBloque.className='form-group';
    }    
    if(!patronCadena.test(sProcedimiento)){       
        var oBloque=document.getElementById("bloqueProcedimiento");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{       
        var oBloque=document.getElementById("bloqueProcedimiento");
        oBloque.className='form-group';
    }   
    if(sDescripcion==""){       
        var oBloque=document.getElementById("bloqueDescripcion");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{      
        var oBloque=document.getElementById("bloqueDescripcion");
        oBloque.className='form-group';
    }  
    if(bValido){
        oDentista=oClinica.buscaPersonal(oDentista.value);
        oCliente=oClinica.buscaCliente(oCliente.value);
        sSala=sSala.value;
        var oCita=new Cita(sId,oDentista,oCliente,sFecha,sSala,sProcedimiento,sDescripcion,bAtendida);
        oClinica.altaCita(oCita,oCliente,oDentista);
        actualizarSelectCita();
        limpiaCampos();
        var titulo=document.querySelector("#form-alta-citas h2");
        titulo.removeChild(titulo.firstChild);
        var oTexto=document.createTextNode("Alta cita");
        titulo.appendChild(oTexto);
    }
    return bValido;
}

function actualizarSelectCita(){
    
    var oSelect=document.getElementById("bajaCita");
    
    while (oSelect.firstChild) {
        oSelect.removeChild(oSelect.firstChild);
    }
    
    var oOptionIni=document.createElement("option");

    oOptionIni.text="--seleccione una cita--";
   
    oSelect.appendChild(oOptionIni);
    
    
    if(oClinica.citas.length>0){
        
        for(var i=0;i<oClinica.citas.length;i++){
            
            var oOption=document.createElement("option");
            
            oOption.value=oClinica.citas[i].id;
            oOption.text=oClinica.citas[i].id+"->"+oClinica.citas[i].dentista.apellidos+", "+oClinica.citas[i].dentista.nombre;
            oSelect.appendChild(oOption);
        }
    }
    
}

function validarBajaCita(evento){
    
    var oEvento = evento || window.event;  
    
    oEvento.preventDefault(); 
    
    if(validarCamposBajaCita()){
       
       return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    } 
}

function validarCamposBajaCita(){
    
    var oCita=document.getElementById("bajaCita");
    var opcion=document.querySelector("#form-baja-citas input[name='opcion']:checked");
    var bValido=true;
    
    if(oCita.selectedIndex=="0"){
        
        var oBloque=document.getElementById("bloqueBajaCita");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloqueBajaCita");
        oBloque.className='form-group';
    }
    
    if(bValido){
        
        oCita=oCita.value;
        
        oCita=oClinica.buscaCita(oCita);
        
        if(opcion.value=="2"){
            var atendida;

            if(oCita.atendida){

                atendida="Sí";
            }
            else{

                atendida="No";
            }


            if(confirm("Cita a borrar \n\
                    Dentista: "+oCita.dentista.apellidos+", "+oCita.dentista.nombre+"\n\
                    Cliente: "+oCita.cliente.apellidos+", "+oCita.cliente.nombre+"\n\
                    Fecha: "+oCita.fechacita+"\n\
                    Sala: "+oCita.sala+"\n\
                    Procedimiento: "+oCita.procedimiento+"\n\
                    Descripción: "+oCita.descripcion+"\n\
                    Atendida: "+atendida+"\n\
                    Está seguro de borrar?")){

                    oClinica.bajaCita(oCita);
                limpiaCampos();
            }
        }
        else{
            
            oClinica.bajaCita(oCita);
            actualizarSelectCita();
            limpiaCampos();
            mostrarFormAltaCita();
            var titulo=document.querySelector("#form-alta-citas h2");
            titulo.removeChild(titulo.firstChild);
            var oTexto=document.createTextNode("Modificar cita");
            titulo.appendChild(oTexto);
            document.getElementById('idCita').value=oCita.id;
            document.getElementById('dentistaCita').value=oCita.dentista.id;
            document.getElementById('clienteCita').value=oCita.cliente.id;
            document.getElementById('fechaCita').value=oCita.fechacita;
            document.getElementById('salaCita').value=oCita.sala;
            document.getElementById('procedimientoCita').value=oCita.procedimiento;
            document.getElementById('descripcionCita').value=oCita.descripcion;
            
            if(oCita.atendida){
                
                document.getElementById('atendidaCita').checked=true;
            }
            
            
        }
        
    }
    
    return bValido;
}

/*----VALIDAR PROVEEDOR----*/
function validarProveedor(evento){
    var oEvento = evento || window.event;    
    oEvento.preventDefault();    
    if(validarCamposTextoProveedor()){       
       return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    }
}

function validarCamposTextoProveedor(){  
    var sId=document.getElementById("idProveedor").value;
    var sNombre=document.getElementById("nombreProveedor").value;
    var iTelefono=document.getElementById('telefonoProveedor').value;
    var bValido=true;   
    var patronId=/(^[A-Z]{1})([0-9]{5}$)/;
    var patronNombre=/[a-zA-Z]+\s?/;
    var patronTelef=/^([0-9]{2,3})?(-|\s)?[0-9]{6,7}$/;
    
    if(!patronId.test(sId)){        
        var oBloque=document.getElementById("bloqueIdProveedor");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{        
        var oBloque=document.getElementById("bloqueIdProveedor");
        oBloque.className='form-group';
    }   
    if(!patronNombre.test(sNombre)){       
        var oBloque=document.getElementById("bloqueNombreProveedor");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{        
        var oBloque=document.getElementById("bloqueNombreProveedor");
        oBloque.className='form-group';
    }    
    if(!patronTelef.test(iTelefono)){       
        var oBloque=document.getElementById("bloqueTelefonoProveedor");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{        
        var oBloque=document.getElementById("bloqueTelefonoProveedor");
        oBloque.className='form-group';
    }   
    if(bValido){       
        var oProveedor=new Proveedor(sId, sNombre, iTelefono);
        oClinica.altaProveedor(oProveedor);
        actualizarSelectProveedores();
        limpiaCampos();
        var titulo=document.querySelector("#form-alta-proveedores h2");
        titulo.removeChild(titulo.firstChild);
        var oTexto=document.createTextNode("Alta proveedor");
        titulo.appendChild(oTexto);
    }   
    return bValido;
}

function actualizarSelectProveedores(){
    
    var oSelect=document.getElementById("proveedorMaterial");
    var oSelect1=document.getElementById("bajaProveedor");
    
    while (oSelect.firstChild) {
        oSelect.removeChild(oSelect.firstChild);
    }
    while (oSelect1.firstChild) {
        oSelect1.removeChild(oSelect1.firstChild);
    }

    var oOptionIni=document.createElement("option");
    var oOptionIni1=document.createElement("option");
    oOptionIni.text="--seleccione un proveedor--";
    oOptionIni1.text="--seleccione un proveedor--";
    oSelect.appendChild(oOptionIni);
    oSelect1.appendChild(oOptionIni1);
    
    
    if(oClinica.proveedores.length>0){
        
        for(var i=0;i<oClinica.proveedores.length;i++){
            
            var oOption=document.createElement("option");
            var oOption1=document.createElement("option");
            oOption.value=oClinica.proveedores[i].id;
            oOption.text=oClinica.proveedores[i].nombre;
            oOption1.value=oClinica.proveedores[i].id;
            oOption1.text=oClinica.proveedores[i].nombre;
            oSelect.appendChild(oOption);
            oSelect1.appendChild(oOption1);
        }
    }
}

function validarBajaProveedor(evento){
    
    var oEvento = evento || window.event;  
    
    oEvento.preventDefault(); 
    
    if(validarCamposBajaProveedor()){
       
       return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    } 
}

function validarCamposBajaProveedor(){
    
    var oProveedor=document.getElementById("bajaProveedor");
    var opcion=document.querySelector("#form-baja-proveedores input[name='opcion']:checked");
    var bValido=true;
    
    if(oProveedor.selectedIndex=="0"){
        
        var oBloque=document.getElementById("bloqueBajaProveedor");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloqueBajaProveedor");
        oBloque.className='form-group';
    }
    
    if(bValido){
        
        oProveedor=oProveedor.value;
        
        oProveedor=oClinica.buscaProveedor(oProveedor);
        
        if(opcion.value=="2"){
            
            if(confirm("Proveedor a borrar \n\
                ID: "+oProveedor.id+"\n\
                Nombre: "+oProveedor.nombre+"\n\
                Teléfono: "+oProveedor.telefono+"\n\
                Está seguro de borrar?")){
            
                oClinica.bajaProveedor(oProveedor);
                limpiaCampos();
            }
            
        }
        else{
            
            oClinica.bajaProveedor(oProveedor);
            actualizarSelectProveedores();
            limpiaCampos();
            mostrarFormAltaProveedor();
            var titulo=document.querySelector("#form-alta-proveedores h2");
            titulo.removeChild(titulo.firstChild);
            var oTexto=document.createTextNode("Modificar proveedor");
            titulo.appendChild(oTexto);
            document.getElementById('idProveedor').value=oProveedor.id;
            document.getElementById('nombreProveedor').value=oProveedor.nombre;
            document.getElementById('telefonoProveedor').value=oProveedor.telefono;
        }

        
    }
    
    return bValido;
}


/*----VALIDAR MATERIALES----*/
function validarMaterial(evento){
    var oEvento=evento||window.event;
    oEvento.preventDefault();
    if(validarCamposTextoMaterial()){
        return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    }
}

function validarCamposTextoMaterial(){
    var sId=document.getElementById('idMaterial').value;
    var sTipo=document.getElementById('tipoMaterial');
    var iCantidad=document.getElementById('cantidadMaterial').value;
    var oProveedor=document.getElementById('proveedorMaterial');
    var bValido=true;
    
    var patronId=/(^[A-Z]{1})([0-9]{5}$)/;
    var patronCantidad=/([1-9]{1,10})/;
    
    if(!patronId.test(sId)){
        var oBloque=document.getElementById('bloqueIdMaterial');
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById('bloqueIdMaterial');
        oBloque.className='form-group';
    }
    if(!patronCantidad.test(iCantidad)){
        var oBloque=document.getElementById('bloqueCantidadMaterial');
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById('bloqueCantidadMaterial');
        oBloque.className='form-group';
    }
    
    if(oProveedor.selectedIndex=="0"){
        
        var oBloque=document.getElementById("bloqueProveedorMaterial");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloqueProveedorMaterial");
        oBloque.className='form-group';
        oProveedor=oProveedor.value;
    }
    
    if(sTipo.selectedIndex=="0"){
        
        var oBloque=document.getElementById("bloqueTipoMaterial");
        oBloque.className='form-group has-error';
        
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloqueTipoMaterial");
        oBloque.className='form-group';
        sTipo=sTipo.value;
    }
    
    
    
    if(bValido){
        
        oProveedor=oClinica.buscaProveedor(oProveedor);
        var oMaterial=new Material(sId, sTipo, iCantidad, oProveedor);
        oClinica.altaMaterial(oMaterial);
        limpiaCampos();
        var titulo=document.querySelector("#form-alta-materiales h2");
        titulo.removeChild(titulo.firstChild);
        var oTexto=document.createTextNode("Alta material");
        titulo.appendChild(oTexto);
    }
    return bValido;
}

function actualizarSelectMateriales(){
    
    var listaMateriales=new Array();
    
    listaMateriales=["Anestesia","Instrumental para cirugía","Instrumental para profilaxis","Material de endodoncia","Material para prótesis","Porcelana","Uniformes","Utensilios"];
	
    var oSelect=document.getElementById("tipoMaterial");
    
    for(var i=0;i<listaMateriales.length;i++){
        
        var oOption=document.createElement("option");
        oOption.value=listaMateriales[i];
        oOption.text=listaMateriales[i];
        oSelect.appendChild(oOption);
    }

}

function validarBajaMaterial(evento){
    var oEvento=evento||window.event;  
    oEvento.preventDefault(); 
    if(validarCamposBajaMaterial()){
       return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    } 
}

function validarCamposBajaMaterial(){
    var oMaterial=document.getElementById("bajaMaterial");
    var opcion=document.querySelector("#form-baja-materiales input[name='opcion']:checked");
    var bValido=true;
    if(oMaterial.selectedIndex=="0"){
        var oBloque=document.getElementById("bloqueBajaMaterial");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueBajaMaterial");
        oBloque.className='form-group';
    }
    if(bValido){
        oMaterial=oMaterial.value;
        oMaterial=oClinica.buscaMaterial(oMaterial);
        if(opcion.value=="2"){
            if(confirm("Material a borrar \n\
                ID: "+oMaterial.id+"\n\
                Tipo: "+oMaterial.tipo+"\n\
                Cantidad: "+oMaterial.cantidad+"\n\
                Proveedor: "+oMaterial.proveedor.nombre+"\n\
                ¿Está seguro que desea borrar?")){
                oClinica.bajaMaterial(oMaterial);
                limpiaCampos();
            }
        }
        else{
            oClinica.bajaMaterial(oMaterial);
            limpiaCampos();
            mostrarFormAltaMaterial();
            var titulo=document.querySelector("#form-alta-materiales h2");
            titulo.removeChild(titulo.firstChild);
            var oTexto=document.createTextNode("Modificar material");
            titulo.appendChild(oTexto);
            document.getElementById('idMaterial').value=oMaterial.id;
            document.getElementById('tipoMaterial').value=oMaterial.tipo;
            document.getElementById('cantidadMaterial').value=oMaterial.cantidad;
            document.getElementById('proveedorMaterial').value=oMaterial.proveedor.id;
        }
    }
    return bValido;
}

function actualizarSelectMateriales2(){
    var oSelect=document.getElementById("bajaMaterial");
    while(oSelect.firstChild){
        oSelect.removeChild(oSelect.firstChild);
    }
    var oOptionIni=document.createElement("option");
    oOptionIni.text="--seleccione un material--";
    oSelect.appendChild(oOptionIni);
    if(oClinica.materiales.length>0){
        for(var i=0;i<oClinica.materiales.length;i++){
            var oOption=document.createElement("option");
            oOption.value=oClinica.materiales[i].id;
            oOption.text=oClinica.materiales[i].id+" - Tipo: "+oClinica.materiales[i].tipo+" - Prov.: "+oClinica.materiales[i].proveedor.nombre+" - "+oClinica.materiales[i].cantidad+" unidades";
            oSelect.appendChild(oOption);
        }
    }
}

/*----VALIDAR PERSONAL----*/
function validarPersonal(evento){
    
    var oEvento = evento || window.event;  
    
    oEvento.preventDefault(); 
    
    if(validarCamposTextoPersonal()){
       
       return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    }
}

function validarCamposTextoPersonal(){
    
    var sId=document.getElementById("idPersonal").value;
    var sNombre=document.getElementById("nombre-alta-dentista").value;
    var sApellidos=document.getElementById("apellido-alta-dentista").value;
    var sFecha=document.getElementById("fecha").value;
    var iNumCol=document.getElementById("numColeg").value;
    var iDepart=document.getElementById("departamento").value;
    var sTipo=document.formPersonal.tipo.value;
    var bValido=true;
    
    var patronId=/(^[A-Z]{1})([0-9]{5}$)/;
    var patronCadena=/[a-zA-Z]+\s?/;
    var patronNum=/^([0-9]{5})$/;
    var patronDepart=/^([0-9]{1,5})$/;
       
    if(!patronId.test(sId)){
        
        var oBloque=document.getElementById("bloque-alta-id");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloque-alta-id");
        oBloque.className='form-group';

    }
    
    if(!patronCadena.test(sNombre)){
        
        var oBloque=document.getElementById("bloque-alta-nombre");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloque-alta-nombre");
        oBloque.className='form-group';

    }
    
    if(!patronCadena.test(sApellidos)){
        
        var oBloque=document.getElementById("bloque-alta-apellido");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloque-alta-apellido");
        oBloque.className='form-group';

    }
    
    if(sFecha==""){
        
        bValido=false;
    }
    
    if (bValido){
        if(sTipo=="1"){

            if(!patronDepart.test(iDepart)){
                var oBloque=document.getElementById("bloqueDepartamento");
                oBloque.className='form-group has-error';
                 bValido=false;
            }
            else{

                var oBloque=document.getElementById("bloqueDepartamento");
                oBloque.className='form-group';
                var oPersonal=new Administrativo(sId, sNombre, sApellidos, sFecha, iDepart);
                oClinica.altaPersonal(oPersonal);
                limpiaCampos();
                var titulo=document.querySelector("#form-alta-personal h2");
                titulo.removeChild(titulo.firstChild);
                var oTexto=document.createTextNode("Alta personal");
                titulo.appendChild(oTexto);
            }   

        }
        else{
            if(sTipo=="2"){
                if(!patronNum.test(iNumCol)){

                    var oBloque=document.getElementById("bloqueNumColeg");
                    oBloque.className='form-group has-error';
                    bValido=false;
                }
                else{

                    var oBloque=document.getElementById("bloqueNumColeg");
                    oBloque.className='form-group';
                    var oPersonal=new Dentista(sId, sNombre, sApellidos, sFecha, iNumCol);
                    oClinica.altaPersonal(oPersonal);
                    limpiaCampos();
                    actualizarSelectDentista();
                    var titulo=document.querySelector("#form-alta-personal h2");
                    titulo.removeChild(titulo.firstChild);
                    var oTexto=document.createTextNode("Alta personal");
                    titulo.appendChild(oTexto);
                }
            }
        }
    }
    return bValido;
}

function actualizarSelectPersonal(){
  
    var oSelect=document.getElementById("bajaPersonal");
    while(oSelect.firstChild){
        oSelect.removeChild(oSelect.firstChild);
    }
    var oOptionIni=document.createElement("option");
    oOptionIni.text="--seleccione un miembro del personal--";
    oSelect.appendChild(oOptionIni);
    if(oClinica.personal.length>0){
        
        for(var i=0;i<oClinica.personal.length;i++){
            
            if(oClinica.personal[i] instanceof Administrativo){
                var oOption=document.createElement("option");
                oOption.value=oClinica.personal[i].id;
                oOption.text="Administrativo: "+oClinica.personal[i].apellidos+", "+oClinica.personal[i].nombre;
                oSelect.appendChild(oOption);
            }
        }
        
        for(var i=0;i<oClinica.personal.length;i++){
            
            if(oClinica.personal[i] instanceof Dentista){
                var oOption=document.createElement("option");
                oOption.value=oClinica.personal[i].id;
                oOption.text="Dentista: "+oClinica.personal[i].apellidos+", "+oClinica.personal[i].nombre;
                oSelect.appendChild(oOption);
            }
        }
    }
 
}


function validarBajaPersonal(evento){
    var oEvento=evento||window.event;  
    oEvento.preventDefault(); 
    if(validarCamposBajaPersonal()){
       return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    } 
}

function validarCamposBajaPersonal(){
    var oPersonal=document.getElementById("bajaPersonal");
    var opcion=document.querySelector("#form-baja-personal input[name='opcion']:checked");
    var bValido=true;
    
    if(oPersonal.selectedIndex=="0"){
        var oBloque=document.getElementById("bloqueBajaPersonal");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueBajaPersonal");
        oBloque.className='form-group';
    }
    if(bValido){
        oPersonal=oPersonal.value;
        oPersonal=oClinica.buscaPersonal(oPersonal);
        
        if(opcion.value=="2"){
            
            if(oPersonal instanceof Administrativo){
            
                if(confirm("Administrativo a borrar \n\
                ID: "+oPersonal.id+"\n\
                Nombre: "+oPersonal.nombre+"\n\
                Apellidos: "+oPersonal.apellidos+"\n\
                Fecha: "+oPersonal.fechaalta+"\n\
                Departamento: "+oPersonal.departamento+"\n\
                ¿Está seguro que desea borrar?")){
                oClinica.bajaPersonal(oPersonal);
                limpiaCampos();
                }
            }
            else{

                if(confirm("Dentista a borrar \n\
                ID: "+oPersonal.id+"\n\
                Nombre: "+oPersonal.nombre+"\n\
                Apellidos: "+oPersonal.apellidos+"\n\
                Fecha: "+oPersonal.fechaalta+"\n\
                Departamento: "+oPersonal.numero+"\n\
                ¿Está seguro que desea borrar?")){
                oClinica.bajaPersonal(oPersonal);
                limpiaCampos();
                }
            
            }
            
        }
        else{
            
            oClinica.bajaPersonal(oPersonal);
            limpiaCampos();
            
            mostrarFormAltaPersonal();
            var titulo=document.querySelector("#form-alta-personal h2");
            titulo.removeChild(titulo.firstChild);
            var oTexto=document.createTextNode("Modificar personal");
            titulo.appendChild(oTexto);
            document.getElementById('idPersonal').value=oPersonal.id;
            document.getElementById('nombre-alta-dentista').value=oPersonal.nombre;
            document.getElementById('apellido-alta-dentista').value=oPersonal.apellidos;
            document.getElementById('fecha').value=oPersonal.fechaalta;
            document.getElementById('apellido-alta-dentista').value=oPersonal.apellidos;
            
            if(oPersonal instanceof Dentista){
                
                document.querySelectorAll("#form-alta-personal input[name='tipo']")[1].checked=true;
                comprobarRadio();
                document.getElementById("numColeg").value=oPersonal.numero;
                
            }
            else{
                
                document.getElementById("departamento").value=oPersonal.departamento;
            }
        }
    }
    return bValido;
}

function actualizarSelectDentista(){
  
    var oSelect=document.getElementById("dentistaCita");
    while(oSelect.firstChild){
        oSelect.removeChild(oSelect.firstChild);
    }
    var oOptionIni=document.createElement("option");
    oOptionIni.text="--seleccione un dentista--";
    oSelect.appendChild(oOptionIni);
    if(oClinica.personal.length>0){
        
        for(var i=0;i<oClinica.personal.length;i++){
            
            if(oClinica.personal[i] instanceof Dentista){
                var oOption=document.createElement("option");
                oOption.value=oClinica.personal[i].id;
                oOption.text=oClinica.personal[i].apellidos+", "+oClinica.personal[i].nombre;
                oSelect.appendChild(oOption);
            }
        }
    }
 
}

/*----VALIDAR PAGOS----*/
function validarPago(evento){
    var oEvento=evento||window.event;
    oEvento.preventDefault();
    if(validarCamposTextoPago()){
       return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    } 
}

function validarCamposTextoPago(){
    var sId=document.getElementById("idPago").value;
    var iCantidad=document.getElementById("cantidadPago").value;
    var bPagada=document.getElementById("citaPagada").checked;
    var oCliente=document.getElementById("clientePago");
    var bValido=true;
    var patronId=/([A-Z]{1})+([0-9]{5})/;
    
    if(oCliente.selectedIndex=="0"){
        var oBloque=document.getElementById("bloqueClientePago");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{   
        var oBloque=document.getElementById("bloqueClientePago");
        oBloque.className='form-group';
    }
    if(!patronId.test(sId)){
        var oBloque=document.getElementById("bloqueIdPago");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueIdPago");
        oBloque.className='form-group';
    }
    if(isNaN(iCantidad) || iCantidad==""){
        var oBloque=document.getElementById("bloqueCantidadPago");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        var oBloque=document.getElementById("bloqueCantidadPago");
        oBloque.className='form-group';
    }
    if(bValido){
        oCliente=oClinica.buscaCliente(oCliente.value);
        var oPago=new Pago(sId, iCantidad, bPagada, oCliente);
        oClinica.altaPago(oPago);
        limpiaCampos();
        var titulo=document.querySelector("#form-alta-pagos h2");
        titulo.removeChild(titulo.firstChild);
        var oTexto=document.createTextNode("Alta pago");
        titulo.appendChild(oTexto);
    }   
    return bValido;
}
function validarBajaPago(evento){
    var oEvento=evento||window.event;  
    oEvento.preventDefault(); 
    if(validarCamposBajaPago()){
       return true;
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("error");
        return false;
    } 
}
function validarCamposBajaPago(){
    var oPago=document.getElementById("bajaPago");
    var opcion=document.querySelector("#form-baja-pagos input[name='opcion']:checked");
    var bValido=true;
    var oBloque=document.getElementById("bloqueBajaPago");
    if(oPago.selectedIndex=="0"){
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        oBloque.className='form-group';
    }
    if(bValido){
        oPago=oPago.value;
        oPago=oClinica.buscaPago(oPago);
        if(opcion.value=="2"){
            if(confirm("Pago a borrar \n\
                ID: "+oPago.id+"\n\
                Importe: "+oPago.importe+" €"+"\n\
                Cliente: "+oPago.cliente.nombre+"\n\
                ¿Está seguro que desea borrar?")){
                oClinica.bajaPago(oPago);
                limpiaCampos();
            }
        }
        else{
            oClinica.bajaPago(oPago);
            limpiaCampos();
            mostrarFormAltaPago();
            var titulo=document.querySelector("#form-alta-pagos h2");
            titulo.removeChild(titulo.firstChild);
            var oTexto=document.createTextNode("Modificar pago");
            titulo.appendChild(oTexto);
            document.getElementById('idPago').value=oPago.id;
            document.getElementById('cantidadPago').value=oPago.importe;
            
            if(oPago.pagado){
                document.getElementById('citaPagada').checked=true;
            }
           
            document.getElementById('clientePago').value=oPago.cliente.id;
        }
    }
    return bValido;
}
function actualizarSelectPagos(){
    var oSelect=document.getElementById("bajaPago");
    while(oSelect.firstChild){
        oSelect.removeChild(oSelect.firstChild);
    }
    var oOptionIni=document.createElement("option");
    oOptionIni.text="--seleccione un pago--";
    oSelect.appendChild(oOptionIni);
    if(oClinica.pagos.length>0){
        for(var i=0;i<oClinica.pagos.length;i++){
            var oOption=document.createElement("option");
            oOption.value=oClinica.pagos[i].id;
            oOption.text=oClinica.pagos[i].id+" - Importe: "+oClinica.pagos[i].importe+" € - Cliente: "+oClinica.pagos[i].cliente.nombre;
            oSelect.appendChild(oOption);
        }
    }
}

/*----VALIDAR SALAS----*/
function actualizarSelectSalas(){
    
    var oSala1=new Sala("01","Consulta 1","Consulta");
    var oSala2=new Sala("02","Consulta 2","Consulta");
    var oSala3=new Sala("03","Sala de espera","Espera");
    var oSala4=new Sala("04","Rayos X","Rayos");
    var oSala5=new Sala("05","Sala de esterilización","Esterilización");
    var oSala6=new Sala("06","Gabinete 1","Gabinete");
    var oSala7=new Sala("07","Gabinete 2","Gabinete");
    
    oClinica.salas=[oSala1,oSala2,oSala3,oSala4,oSala5,oSala6,oSala7];
    
    var oSelect=document.getElementById("salaCita");
    
    for(var i=0;i<oClinica.salas.length;i++){
        
        var oOption=document.createElement("option");
        oOption.value=oClinica.salas[i].nombre;
        oOption.text=oClinica.salas[i].nombre;
        oSelect.appendChild(oOption);
    }
}

/*LISTAR CLIENTES*/
function listarClientes(){
    
    mostrarListadoClientes();
    
    var oBloque=document.getElementById("listadoClientes");
    while (oBloque.firstChild) {
        oBloque.removeChild(oBloque.firstChild);
    }
    
    if(oClinica.clientes.length!="0"){
    
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("LISTADO DE CLIENTES");
        titulo.appendChild(textoTitulo);

        var tabla   = document.createElement("table");
        tabla.setAttribute("class","table");

        var tHead = document.createElement("thead");
        var oCabecera=document.createElement("tr");

        var oCelda=document.createElement("th");
        var textoCelda=document.createTextNode("ID");
        var oCelda1=document.createElement("th");
        var textoCelda1 = document.createTextNode("NOMBRE");
        var oCelda2=document.createElement("th");
        var textoCelda2 = document.createTextNode("APELLIDOS");
        var oCelda3=document.createElement("th");
        var textoCelda3 = document.createTextNode("TELÉFONO");

        oCelda.appendChild(textoCelda);
        oCelda1.appendChild(textoCelda1);
        oCelda2.appendChild(textoCelda2);
        oCelda3.appendChild(textoCelda3);

        oCabecera.appendChild(oCelda);
        oCabecera.appendChild(oCelda1);
        oCabecera.appendChild(oCelda2);
        oCabecera.appendChild(oCelda3);

        tHead.appendChild(oCabecera);
        tabla.appendChild(tHead);

        var tBody = document.createElement("tbody");

        for (var i=0; i<oClinica.clientes.length; i++) {

            var oFila =oClinica.clientes[i].toHTMLRow();
            tBody.appendChild(oFila);
        }

        tabla.appendChild(tBody);
        oBloque.appendChild(titulo);
        oBloque.appendChild(tabla);
    }
    else{
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("NO EXISTEN CLIENTES REGISTRADOS");
        titulo.appendChild(textoTitulo);
        oBloque.appendChild(titulo);
    }
}

/*LISTAR CITAS*/
function listarCitas(){
    
    mostrarListadoCitas();
    
    var oBloque=document.getElementById("listadoCitas");
    while (oBloque.firstChild) {
        oBloque.removeChild(oBloque.firstChild);
    }
    
    if(oClinica.citas.length!="0"){
        
    
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("LISTADO DE CITAS");
        titulo.appendChild(textoTitulo);

        var tabla   = document.createElement("table");
        tabla.setAttribute("class","table");

        var tHead = document.createElement("thead");
        var oCabecera=document.createElement("tr");

        var oCelda=document.createElement("th");
        var textoCelda=document.createTextNode("FECHA");
        var oCelda1=document.createElement("th");
        var textoCelda1 = document.createTextNode("PROCEDIMIENTO");
        var oCelda2=document.createElement("th");
        var textoCelda2 = document.createTextNode("DESCRIPCIÓN");
        var oCelda3=document.createElement("th");
        var textoCelda3=document.createTextNode("ATENDIDA");
        var oCelda4=document.createElement("th");
        var textoCelda4 = document.createTextNode("CLIENTE");
        var oCelda5=document.createElement("th");
        var textoCelda5 = document.createTextNode("DENTISTA");
        var oCelda6=document.createElement("th");
        var textoCelda6 = document.createTextNode("SALA");

        oCelda.appendChild(textoCelda);
        oCelda1.appendChild(textoCelda1);
        oCelda2.appendChild(textoCelda2);
        oCelda3.appendChild(textoCelda3);
        oCelda4.appendChild(textoCelda4);
        oCelda5.appendChild(textoCelda5);
        oCelda6.appendChild(textoCelda6);

        oCabecera.appendChild(oCelda);
        oCabecera.appendChild(oCelda1);
        oCabecera.appendChild(oCelda2);
        oCabecera.appendChild(oCelda3);
        oCabecera.appendChild(oCelda4);
        oCabecera.appendChild(oCelda5);
        oCabecera.appendChild(oCelda6);

        tHead.appendChild(oCabecera);
        tabla.appendChild(tHead);

        var tBody = document.createElement("tbody");

        for (var i=0; i<oClinica.citas.length; i++) {

            var oFila =oClinica.citas[i].toHTMLRow();
            tBody.appendChild(oFila);
        }

        tabla.appendChild(tBody);
        oBloque.appendChild(titulo);
        oBloque.appendChild(tabla);
    }
    else{
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("NO EXISTEN CITAS REGISTRADAS");
        titulo.appendChild(textoTitulo);
        oBloque.appendChild(titulo);
    }
}

/*LISTAR PROVEEDORES*/
function listarProveedores(){
    
    mostrarListadoProveedores();
    
    var oBloque=document.getElementById("listadoProveedores");
    while (oBloque.firstChild) {
        oBloque.removeChild(oBloque.firstChild);
    }
    
    if(oClinica.proveedores.length!="0"){
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("LISTADO DE PROVEEDORES");
        titulo.appendChild(textoTitulo);

        var tabla   = document.createElement("table");
        tabla.setAttribute("class","table");

        var tHead = document.createElement("thead");
        var oCabecera=document.createElement("tr");

        var oCelda=document.createElement("th");
        var textoCelda=document.createTextNode("ID");
        var oCelda1=document.createElement("th");
        var textoCelda1 = document.createTextNode("NOMBRE");
        var oCelda2=document.createElement("th");
        var textoCelda2 = document.createTextNode("TELÉFONO");

        oCelda.appendChild(textoCelda);
        oCelda1.appendChild(textoCelda1);
        oCelda2.appendChild(textoCelda2);

        oCabecera.appendChild(oCelda);
        oCabecera.appendChild(oCelda1);
        oCabecera.appendChild(oCelda2);

        tHead.appendChild(oCabecera);
        tabla.appendChild(tHead);

        var tBody = document.createElement("tbody");

        for (var i=0; i<oClinica.proveedores.length; i++) {

            var oFila =oClinica.proveedores[i].toHTMLRow();
            tBody.appendChild(oFila);
        }

        tabla.appendChild(tBody);
        oBloque.appendChild(titulo);
        oBloque.appendChild(tabla);
    }
    else{
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("NO EXISTEN PROVEEDORES REGISTRADOS");
        titulo.appendChild(textoTitulo);
        oBloque.appendChild(titulo);
    }
}

/*LISTAR MATERIALES*/
function listarMateriales(){
    
    mostrarListadoMateriales();
    
    var oBloque=document.getElementById("listadoMateriales");
    while (oBloque.firstChild) {
        oBloque.removeChild(oBloque.firstChild);
    }
    
    if(oClinica.materiales.length!="0"){
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("LISTADO DE MATERIALES");
        titulo.appendChild(textoTitulo);

        var tabla   = document.createElement("table");
        tabla.setAttribute("class","table");

        var tHead = document.createElement("thead");
        var oCabecera=document.createElement("tr");

        var oCelda=document.createElement("th");
        var textoCelda=document.createTextNode("ID");
        var oCelda1=document.createElement("th");
        var textoCelda1 = document.createTextNode("TIPO");
        var oCelda2=document.createElement("th");
        var textoCelda2 = document.createTextNode("CANTIDAD");
        var oCelda3=document.createElement("th");
        var textoCelda3 = document.createTextNode("PROVEEDOR");

        oCelda.appendChild(textoCelda);
        oCelda1.appendChild(textoCelda1);
        oCelda2.appendChild(textoCelda2);
        oCelda3.appendChild(textoCelda3);

        oCabecera.appendChild(oCelda);
        oCabecera.appendChild(oCelda1);
        oCabecera.appendChild(oCelda2);
        oCabecera.appendChild(oCelda3);

        tHead.appendChild(oCabecera);
        tabla.appendChild(tHead);

        var tBody = document.createElement("tbody");

        for (var i=0; i<oClinica.materiales.length; i++) {

            var oFila =oClinica.materiales[i].toHTMLRow();
            tBody.appendChild(oFila);
        }

        tabla.appendChild(tBody);
        oBloque.appendChild(titulo);
        oBloque.appendChild(tabla);
    }
    else{
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("NO EXISTEN MATERIALES REGISTRADOS");
        titulo.appendChild(textoTitulo);
        oBloque.appendChild(titulo);
    }
}

/*LISTAR PERSONAL*/
function listarPersonal(evento){
    
    mostrarListadoPersonal();
    
    var oEvento = evento || window.event;  
    
    oEvento.preventDefault(); 
    
    var oFiltro=document.formFiltros.filtro.value;
    
    var oBloque=document.getElementById("listadoPersonal");
    while (oBloque.firstChild) {
        oBloque.removeChild(oBloque.firstChild);
    }
    
    if(oClinica.personal.length!="0"){
        
        if(oFiltro=="1"){

            var titulo=document.createElement("h2");
            titulo.setAttribute("class","text-center");
            var textoTitulo=document.createTextNode("LISTADO DE PERSONAL");
            titulo.appendChild(textoTitulo);

            var tabla   = document.createElement("table");
            tabla.setAttribute("class","table");
            var tHead = document.createElement("thead");
            var oCabecera=document.createElement("tr");

            var oCelda=document.createElement("th");
            var textoCelda=document.createTextNode("TIPO");
            var oCelda1=document.createElement("th");
            var textoCelda1 = document.createTextNode("ID");
            var oCelda2=document.createElement("th");
            var textoCelda2 = document.createTextNode("NOMBRE");
            var oCelda3=document.createElement("th");
            var textoCelda3 = document.createTextNode("APELLIDOS");
            var oCelda4=document.createElement("th");
            var textoCelda4 = document.createTextNode("FECHA DE ALTA");
            var oCelda5=document.createElement("th");
            var textoCelda5 = document.createTextNode("DEPARTAMENTO");
            var oCelda6=document.createElement("th");
            var textoCelda6 = document.createTextNode("NÚM. COLEGIADO");

            oCelda.appendChild(textoCelda);
            oCelda1.appendChild(textoCelda1);
            oCelda2.appendChild(textoCelda2);
            oCelda3.appendChild(textoCelda3);
            oCelda4.appendChild(textoCelda4);
            oCelda5.appendChild(textoCelda5);
            oCelda6.appendChild(textoCelda6);


            oCabecera.appendChild(oCelda1);
            oCabecera.appendChild(oCelda2);
            oCabecera.appendChild(oCelda3);
            oCabecera.appendChild(oCelda4);
            oCabecera.appendChild(oCelda5);
            oCabecera.appendChild(oCelda6);
            oCabecera.appendChild(oCelda);

            tHead.appendChild(oCabecera);

            var tBody = document.createElement("tbody");

            for (var i=0; i<oClinica.personal.length; i++) {

                if(oClinica.personal[i] instanceof Administrativo){

                    var oCelda=document.createElement("td");
                    var textoCelda=document.createTextNode("Administrativo");
                    oCelda.appendChild(textoCelda);
                }
                else{

                    var oCelda=document.createElement("td");
                    var textoCelda=document.createTextNode("Dentista");
                    oCelda.appendChild(textoCelda);
                }
                var oFila =oClinica.personal[i].toHTMLRow();
                oFila.appendChild(oCelda);


                tBody.appendChild(oFila);
            }
            
            tabla.appendChild(tHead);
            tabla.appendChild(tBody);
            oBloque.appendChild(titulo);
            oBloque.appendChild(tabla);
        }
        else{

            if(oFiltro=="2"){
                
                var iCont=0;
                var titulo=document.createElement("h2");
                titulo.setAttribute("class","text-center");
                var textoTitulo=document.createTextNode("LISTADO DE ADMINISTRATIVOS");
                titulo.appendChild(textoTitulo);
                
                var tabla   = document.createElement("table");
                tabla.setAttribute("class","table");
                var tHead = document.createElement("thead");
                var oCabecera=document.createElement("tr");

                var oCelda1=document.createElement("th");
                var textoCelda1 = document.createTextNode("ID");
                var oCelda2=document.createElement("th");
                var textoCelda2 = document.createTextNode("NOMBRE");
                var oCelda3=document.createElement("th");
                var textoCelda3 = document.createTextNode("APELLIDOS");
                var oCelda4=document.createElement("th");
                var textoCelda4 = document.createTextNode("FECHA DE ALTA");
                var oCelda5=document.createElement("th");
                var textoCelda5 = document.createTextNode("DEPARTAMENTO");

                oCelda1.appendChild(textoCelda1);
                oCelda2.appendChild(textoCelda2);
                oCelda3.appendChild(textoCelda3);
                oCelda4.appendChild(textoCelda4);
                oCelda5.appendChild(textoCelda5);


                oCabecera.appendChild(oCelda1);
                oCabecera.appendChild(oCelda2);
                oCabecera.appendChild(oCelda3);
                oCabecera.appendChild(oCelda4);
                oCabecera.appendChild(oCelda5);

                tHead.appendChild(oCabecera);

                var tBody = document.createElement("tbody");
                
                for (var i=0; i<oClinica.personal.length; i++) {
                    
                    if(oClinica.personal[i] instanceof Administrativo){
                        
                        var oFila =oClinica.personal[i].toHTMLRowSeparado();
                        tBody.appendChild(oFila);
                        iCont++;
                    }
                    
                }
                
                if(iCont>0){
            
                    tabla.appendChild(tHead);
                    tabla.appendChild(tBody);
                    oBloque.appendChild(titulo);
                    oBloque.appendChild(tabla);
                }
                else{

                    var titulo=document.createElement("h2");
                    titulo.setAttribute("class","text-center");
                    var textoTitulo=document.createTextNode("NO EXISTEN ADMINISTRATIVOS REGISTRADOS");
                    titulo.appendChild(textoTitulo);
                    oBloque.appendChild(titulo);
                }
            }
            else{
                
                var iCont=0;
                var titulo=document.createElement("h2");
                titulo.setAttribute("class","text-center");
                var textoTitulo=document.createTextNode("LISTADO DE DENTISTAS");
                titulo.appendChild(textoTitulo);
                
                var tabla   = document.createElement("table");
                tabla.setAttribute("class","table");
                var tHead = document.createElement("thead");
                var oCabecera=document.createElement("tr");

                var oCelda1=document.createElement("th");
                var textoCelda1 = document.createTextNode("ID");
                var oCelda2=document.createElement("th");
                var textoCelda2 = document.createTextNode("NOMBRE");
                var oCelda3=document.createElement("th");
                var textoCelda3 = document.createTextNode("APELLIDOS");
                var oCelda4=document.createElement("th");
                var textoCelda4 = document.createTextNode("FECHA DE ALTA");
                var oCelda5=document.createElement("th");
                var textoCelda5 = document.createTextNode("NÚM. COLEGIADO");

                oCelda1.appendChild(textoCelda1);
                oCelda2.appendChild(textoCelda2);
                oCelda3.appendChild(textoCelda3);
                oCelda4.appendChild(textoCelda4);
                oCelda5.appendChild(textoCelda5);


                oCabecera.appendChild(oCelda1);
                oCabecera.appendChild(oCelda2);
                oCabecera.appendChild(oCelda3);
                oCabecera.appendChild(oCelda4);
                oCabecera.appendChild(oCelda5);

                tHead.appendChild(oCabecera);

                var tBody = document.createElement("tbody");

                for (var i=0; i<oClinica.personal.length; i++) {
                    
                    if(oClinica.personal[i] instanceof Dentista){
                        
                        var oFila =oClinica.personal[i].toHTMLRowSeparado();
                        tBody.appendChild(oFila);
                        iCont++;
                    }
                    
                }
                
                if(iCont>0){
            
                    tabla.appendChild(tHead);
                    tabla.appendChild(tBody);
                    oBloque.appendChild(titulo);
                    oBloque.appendChild(tabla);
                }
                else{

                    var titulo=document.createElement("h2");
                    titulo.setAttribute("class","text-center");
                    var textoTitulo=document.createTextNode("NO EXISTEN DENTISTAS REGISTRADOS");
                    titulo.appendChild(textoTitulo);
                    oBloque.appendChild(titulo);
                }
                
            }
        }   
    }
    else{
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("NO EXISTE PERSONAL REGISTRADO");
        titulo.appendChild(textoTitulo);
        oBloque.appendChild(titulo);
    }
}

/*LISTAR PAGOS*/
function listarPago(){
    
    mostrarListadoPagos();
    
    var oBloque=document.getElementById("listadoPagos");
    while (oBloque.firstChild) {
        oBloque.removeChild(oBloque.firstChild);
    }
    
    if(oClinica.pagos.length!="0"){
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("LISTADO DE PAGOS");
        titulo.appendChild(textoTitulo);

        var tabla   = document.createElement("table");
        tabla.setAttribute("class","table");

        var tHead = document.createElement("thead");
        var oCabecera=document.createElement("tr");

        var oCelda=document.createElement("th");
        var textoCelda=document.createTextNode("ID");
        var oCelda1=document.createElement("th");
        var textoCelda1 = document.createTextNode("IMPORTE");
        var oCelda2=document.createElement("th");
        var textoCelda2 = document.createTextNode("PAGADO");
        var oCelda3=document.createElement("th");
        var textoCelda3 = document.createTextNode("CLIENTE");

        oCelda.appendChild(textoCelda);
        oCelda1.appendChild(textoCelda1);
        oCelda2.appendChild(textoCelda2);
        oCelda3.appendChild(textoCelda3);

        oCabecera.appendChild(oCelda);
        oCabecera.appendChild(oCelda1);
        oCabecera.appendChild(oCelda2);
        oCabecera.appendChild(oCelda3);

        tHead.appendChild(oCabecera);
        tabla.appendChild(tHead);

        var tBody = document.createElement("tbody");

        for (var i=0; i<oClinica.pagos.length; i++) {

            var oFila =oClinica.pagos[i].toHTMLRow();
            tBody.appendChild(oFila);
        }

        tabla.appendChild(tBody);
        oBloque.appendChild(titulo);
        oBloque.appendChild(tabla);
    }
    else{
        
        var titulo=document.createElement("h2");
        titulo.setAttribute("class","text-center");
        var textoTitulo=document.createTextNode("NO EXISTEN PAGOS REGISTRADOS");
        titulo.appendChild(textoTitulo);
        oBloque.appendChild(titulo);
    }
}

/*LISTAR SALAS*/
function listarSalas(){
    
    mostrarListadoSalas();
    
    var oBloque=document.getElementById("listadoSalas");
    while (oBloque.firstChild) {
        oBloque.removeChild(oBloque.firstChild);
    }
    
    var titulo=document.createElement("h2");
    titulo.setAttribute("class","text-center");
    var textoTitulo=document.createTextNode("LISTADO DE SALAS");
    titulo.appendChild(textoTitulo);
    
    var tabla   = document.createElement("table");
    tabla.setAttribute("class","table");
    
    var tHead = document.createElement("thead");
    var oCabecera=document.createElement("tr");

    var oCelda=document.createElement("th");
    var textoCelda=document.createTextNode("ID");
    var oCelda1=document.createElement("th");
    var textoCelda1 = document.createTextNode("NOMBRE");
    var oCelda2=document.createElement("th");
    var textoCelda2 = document.createTextNode("TIPO");
    
    oCelda.appendChild(textoCelda);
    oCelda1.appendChild(textoCelda1);
    oCelda2.appendChild(textoCelda2);
    
    oCabecera.appendChild(oCelda);
    oCabecera.appendChild(oCelda1);
    oCabecera.appendChild(oCelda2);
    
    tHead.appendChild(oCabecera);
    tabla.appendChild(tHead);
    
    var tBody = document.createElement("tbody");
    
    for (var i=0; i<oClinica.salas.length; i++) {
        
        var oFila =oClinica.salas[i].toHTMLRow();
        tBody.appendChild(oFila);
    }
    
    tabla.appendChild(tBody);
    oBloque.appendChild(titulo);
    oBloque.appendChild(tabla);
}

/*MENSAJES DE ALERTA*/
function mensaje(sMensaje){
	
    var oTextoMensaje = document.getElementById("textoMensaje");
			
    var texto = document.createTextNode(sMensaje);
    
    while(oTextoMensaje.firstChild){
        
        oTextoMensaje.removeChild(oTextoMensaje.firstChild);
    }
    
    oTextoMensaje.appendChild(texto);
			
    var oCapaMensaje = document.getElementById("mensajes");
			
    oCapaMensaje.style.display = "block";
			
    var oCapaTransparente = document.getElementById("capaTransparente");
    var oCapaTransparente1 = document.getElementById("capaTransparente");
			
    oCapaTransparente.style.zIndex = 1;
    oCapaTransparente.style.display ="block";
    oCapaTransparente1.style.zIndex = 1;
    oCapaTransparente1.style.display ="block";		
}
		
function ocultarMensaje(){
    var oCapaMensaje = document.getElementById("mensajes");
    oCapaMensaje.style.display = "none";
    oCapaMensaje.className="alert alert-info";
    var oCapaTransparente = document.getElementById("capaTransparente");
    var oCapaTransparente1 = document.getElementById("capaTransparente");
			
    oCapaTransparente.style.zIndex = -1;
    oCapaTransparente1.style.zIndex = -1;
}

/*LIMPIA CAMPOS*/
function limpiaCampos(){
    var textInputs=document.querySelectorAll("input[type='text']");
    var i;
    for(i=0;i<textInputs.length;i++){
        textInputs[i].value="";
    }
    var selectInputs=document.querySelectorAll("select");
    var j;
    for(j=0;j<selectInputs.length;j++){
        selectInputs[j].selectedIndex=0;
    }
    var checkInputs=document.querySelectorAll("input[type='checkbox']");
    var k;
    for(k=0;k<checkInputs.length;k++){
        checkInputs[k].checked=false;
    }
    var textAreas=document.querySelectorAll("textarea");
    var l;
    for(l=0;l<textAreas.length;l++){
        textAreas[l].value="";
    }
    var radioInputs=document.querySelectorAll("input[type='radio']");
    var m;
    for(m=0;m<radioInputs.length;m++){
        if(radioInputs[m].value=="1"){
            radioInputs[m].checked=true;
        }
        else{
            radioInputs[m].checked=false;
        }
    }
}

/*XML*/
var oXML=loadXMLDoc("datosprueba.xml");
function loadXMLDoc(filename){
	if(window.XMLHttpRequest){
		xhttp=new XMLHttpRequest();
	}
	else{ //code for IE5 and IE6
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",filename,false);
	xhttp.send();
	return xhttp.responseXML;
}

var oClientes=oXML.querySelectorAll("clientes cliente");
var oProveedores=oXML.querySelectorAll("proveedores proveedor");
var oAdministrativos=oXML.querySelectorAll("personal administrativos administrativo");
var oDentistas=oXML.querySelectorAll("personal dentistas dentista");
var oPagos=oXML.querySelectorAll("pagos pago");
var oMateriales=oXML.querySelectorAll("materiales material");
var oCitas=oXML.querySelectorAll("citas cita");

for(var i=0;i<oClientes.length;i++){
    
    var sId=oClientes[i].getAttribute("id");
    var sNombre=oClientes[i].getElementsByTagName("nombre")[0].textContent;
    var sApellidos=oClientes[i].getElementsByTagName("apellidos")[0].textContent;
    var iTelefono=oClientes[i].getElementsByTagName("telefono")[0].textContent;
    var oCliente=new Cliente(sId,sNombre,sApellidos,iTelefono);
    
    oClinica.altaCliente(oCliente);
    actualizarSelectCliente();
}

for(var i=0;i<oProveedores.length;i++){
    
    var sId=oProveedores[i].getAttribute("id");
    var sNombre=oProveedores[i].getElementsByTagName("nombre")[0].textContent;
    var iTelefono=oProveedores[i].getElementsByTagName("telefono")[0].textContent;
    var oProveedor=new Proveedor(sId,sNombre,iTelefono);
    
    oClinica.altaProveedor(oProveedor);
    actualizarSelectProveedores();
}

for(var i=0;i<oAdministrativos.length;i++){
    
    var sId=oAdministrativos[i].getAttribute("id");
    var sNombre=oAdministrativos[i].getElementsByTagName("nombre")[0].textContent;
    var sApellidos=oAdministrativos[i].getElementsByTagName("apellidos")[0].textContent;
    var sFecha=oAdministrativos[i].getElementsByTagName("fecha")[0].textContent;
    var iDepartamento=oAdministrativos[i].getElementsByTagName("departamento")[0].textContent;
    var oAdministrativo=new Administrativo(sId,sNombre,sApellidos,sFecha,iDepartamento);
    
    oClinica.altaPersonal(oAdministrativo);
    //actualizarSelectPersonal
}

for(var i=0;i<oDentistas.length;i++){
    
    var sId=oDentistas[i].getAttribute("id");
    var sNombre=oDentistas[i].getElementsByTagName("nombre")[0].textContent;
    var sApellidos=oDentistas[i].getElementsByTagName("apellidos")[0].textContent;
    var sFecha=oDentistas[i].getElementsByTagName("fecha")[0].textContent;
    var iColegiado=oDentistas[i].getElementsByTagName("colegiado")[0].textContent;
    var oDentista=new Dentista(sId,sNombre,sApellidos,sFecha,iColegiado);
    
    oClinica.altaPersonal(oDentista);
    actualizarSelectDentista();
    //actualizarSelectPersonal
}

for(var i=0;i<oPagos.length;i++){
    
    var sId=oPagos[i].getAttribute("id");
    var sCantidad=oPagos[i].getElementsByTagName("cantidad")[0].textContent;
    var sPagada=oPagos[i].getElementsByTagName("pagada")[0].textContent;
    var oCliente=oPagos[i].getElementsByTagName("cliente")[0].textContent;
    oCliente=oClinica.buscaCliente(oCliente);
    
    var oPago=new Pago(sId,sCantidad,sPagada,oCliente);
    
    oClinica.altaPago(oPago);

}

for(var i=0;i<oMateriales.length;i++){
    
    var sId=oMateriales[i].getAttribute("id");
    var sTipo=oMateriales[i].getElementsByTagName("tipo")[0].textContent;
    var iCantidad=oMateriales[i].getElementsByTagName("cantidad")[0].textContent;
    var oProveedor=oMateriales[i].getElementsByTagName("proveedor")[0].textContent;
    oProveedor=oClinica.buscaProveedor(oProveedor);
    
    var oMaterial=new Material(sId,sTipo,iCantidad,oProveedor);
    
    oClinica.altaMaterial(oMaterial);

}

for(var i=0;i<oCitas.length;i++){
    
    var sId=oCitas[i].getAttribute("id");
    var oDentista=oCitas[i].getElementsByTagName("dentista")[0].textContent;
    var oCliente=oCitas[i].getElementsByTagName("cliente")[0].textContent;
    var sFecha=oCitas[i].getElementsByTagName("fecha")[0].textContent;
    var sSala=oCitas[i].getElementsByTagName("sala")[0].textContent;
    var sProcedimiento=oCitas[i].getElementsByTagName("procedimiento")[0].textContent;
    var sDescripcion=oCitas[i].getElementsByTagName("descripcion")[0].textContent;
    var sAtendida=oCitas[i].getElementsByTagName("atendida")[0].textContent;
    oDentista=oClinica.buscaPersonal(oDentista);
    oCliente=oClinica.buscaCliente(oCliente);
    
    var oCita=new Cita(sId,oDentista,oCliente,sFecha,sSala,sProcedimiento,sDescripcion,sAtendida);
    
    oClinica.altaCita(oCita,oDentista,oCliente);
    actualizarSelectCita();

}

mensaje("Datos de prueba cargados");

/*CALENDARIOS*/
function calendario1(){
    Calendar.setup({inputField: "fecha", ifFormat: "%d / %m / %Y", button: "selector"});
}
function calendario2(){Calendar.setup({inputField: "fechaCita", ifFormat: "%d / %m / %Y", button: "selector2"});
}
