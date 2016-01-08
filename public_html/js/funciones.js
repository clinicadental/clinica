window.addEventListener('load',asignarEventos,false);
window.addEventListener('load',calendario1,false);
window.addEventListener('load',calendario2,false);
var oClinica=new Clinica();
actualizarSelectSalas();

function calendario1(){
    
    Calendar.setup({
    inputField: "fecha",
    ifFormat:   "%d / %m / %Y",
    button:     "selector"
  });
}

function calendario2(){
    
    Calendar.setup({
    inputField: "fechaCita",
    ifFormat:   "%d / %m / %Y",
    button:     "selector2"
  });
}

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
    
    var oFormCita=document.getElementById("btnAltaCita");
    oFormCita.addEventListener('click', validarCita, false);
    var oAltaCita=document.getElementById('altaCita');
    oAltaCita.addEventListener('click',mostrarFormAltaCita,false);
    var oListadoCitas=document.getElementById("listaCitas");
    oListadoCitas.addEventListener('click',listarCitas,false);
    
    var oFormProveedor=document.getElementById("btnAltaProveedor");
    oFormProveedor.addEventListener('click', validarProveedor, false);
    var oAltaProveedor=document.getElementById('altaProveedor');
    oAltaProveedor.addEventListener('click',mostrarFormAltaProveedor,false);
    var oListadoProveedores=document.getElementById("listaProveedores");
    oListadoProveedores.addEventListener('click',listarProveedores,false);
    
    /*var oFormMaterial=document.getElementById("btnAltaMaterial");
    oFormMaterial.addEventListener('click', validarMaterial, false);*/
    var oAltaMaterial=document.getElementById('altaMaterial');
    oAltaMaterial.addEventListener('click',mostrarFormAltaMaterial,false);
   /* var oListadoMateriales=document.getElementById("listaMateriales");
    oListadoMateriales.addEventListener('click',listarMateriales,false);*/
   
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
    document.getElementById("nombre-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellido-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("nombreCliente").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellidosCliente").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("nombreProveedor").addEventListener('keypress',validarSinNumeros,false);
    
    /*var oFormPago=document.getElementById("btnAltaPago");
    oFormPago.addEventListener('click', validarPago, false);*/
    var oAltaPago=document.getElementById('altaPago');
    oAltaPago.addEventListener('click',mostrarFormAltaPago,false);
    /*var oListadoPagos=document.getElementById("listaPagos");
    oListadoPagos.addEventListener('click',listarPago,false);*/
    
    var oListadoSalas=document.getElementById("listaSalas");
    oListadoSalas.addEventListener('click',listarSalas,false);
}

/*MOSTRAR FORMULARIOS*/

function mostrarFormAltaCliente(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="block";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarFormAltaCita(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="block";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarFormAltaProveedor(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="block";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarFormAltaMaterial(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="block";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarFormAltaPersonal(){ 
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="block";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarFormAltaPago(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="block";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarListadoClientes(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="block";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarListadoCitas(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="block";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarListadoProveedores(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="block";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarListadoPersonal(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="block";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="none";
}

function mostrarListadoSalas(){
    var oFormularioCli=document.querySelector("#form-alta-clientes");
    oFormularioCli.style.display="none";
    var oFormularioCit=document.querySelector("#form-alta-citas");
    oFormularioCit.style.display="none";
    var oFormularioPro=document.querySelector("#form-alta-proveedores");
    oFormularioPro.style.display="none";
    var oFormularioMat=document.querySelector("#form-alta-materiales");
    oFormularioMat.style.display="none";
    var oFormularioPer=document.querySelector("#form-alta-personal");
    oFormularioPer.style.display="none";
    var oFormularioPag=document.querySelector("#form-alta-pagos");
    oFormularioPag.style.display="none";
    
    var oListado=document.querySelector("#listadoClientes");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoCitas");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoProveedores");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoPersonal");
    oListado.style.display="none";
    var oListado=document.querySelector("#listadoSalas");
    oListado.style.display="block";
}

/*VALIDACIONES*/
function validarSinNumeros(evento){
    
    var oEvento = evento || window.event
	
    var codigoChar = oEvento.charCode || oEvento.keyCode; 
		
    var caracter = String.fromCharCode(codigoChar);
    
    if (caracter == "0" || caracter == "1" || caracter == "2" ||caracter == "3" || 
        caracter == "4" || caracter == "5" || caracter == "6" || caracter == "7" || 
        caracter == "8" ||caracter == "9"){			
            oEvento.preventDefault();
    }
}

function validarMaterial(evento){
    
}

function validarCliente(evento){
    
    var oEvento = evento || window.event  
    
    oEvento.preventDefault(); 
    
    if(validarCamposTextoCliente()){
       
       return true;
    }
    else{
          
       alert("error");
       return false;
    } 
}

function validarCamposTextoCliente(){
    
    var sId=document.getElementById('idCliente').value;
    var sNombre=document.getElementById('nombreCliente').value;
    var sApellidos=document.getElementById('apellidosCliente').value;
    var iTelefono=document.getElementById('telefonoCliente').value;
    var bValido=true;
    
    var patronId=/([A-Z]{1})+([0-9]{5})/;
    var patronTelef=/[0-9]{2,3}-? ?[0-9]{6,7}/;
    
    if(!patronId.test(sId)){
        
        var oBloque=document.getElementById("bloqueIdCliente");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloqueIdCliente");
        oBloque.className='form-group';

    }
    
    if(sNombre===""){
        
        var oBloque=document.getElementById("bloqueNombreCliente");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloqueNombreCliente");
        oBloque.className='form-group';

    }
    
    if(sApellidos===""){
        
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
        actualizarSelectCliente(sNombre,sApellidos,sId);
        
    }
    
    return bValido;
}

function actualizarSelectCliente(sNombre,sApellidos,sId){
    
    var oSelect=document.getElementById("clienteCita");
    var oOption=document.createElement("option");
    oOption.value=sId;
    oOption.text=sApellidos+", "+sNombre;
    oSelect.appendChild(oOption);
}

function validarCita(evento){
    
    var oEvento = evento || window.event  
    
    oEvento.preventDefault(); 
    
    if(validarCamposTextoCita()){
       
       return true;
    }
    else{
          
       alert("error");
       return false;
    } 
}

function validarCamposTextoCita(){
    
    var oDentista=document.getElementById("dentistaCita");
    var oCliente=document.getElementById("clienteCita");
    var sFecha=document.getElementById("fechaCita").value;
    var sSala=document.getElementById("salaCita");
    var sProcedimiento=document.getElementById("procedimientoCita").value;
    var sDescripcion=document.getElementById("descripcionCita").value;
    var bAtendida=document.getElementById("atendidaCita").checked;
    var bValido=true;
    
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
    
    if(sProcedimiento==""){
        
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
        var oCita=new Cita(oDentista,oCliente,sFecha,sSala,sProcedimiento,sDescripcion,bAtendida);
        oClinica.altaCita(oCita,oCliente,oDentista);
    }
    
    return bValido;
}

function validarProveedor(evento){
    
    var oEvento = evento || window.event  
    
    oEvento.preventDefault(); 
    
    if(validarCamposTextoProveedor()){
       
       return true;
    }
    else{
          
       alert("error");
       return false;
    }
}

function validarCamposTextoProveedor(){
    
    var sId=document.getElementById("idProveedor").value;
    var sNombre=document.getElementById("nombreProveedor").value;
    var iTelefono=document.getElementById('telefonoProveedor').value;
    var bValido=true;
    
    var patronId=/([A-Z]{1})+([0-9]{5})/;
    var patronTelef=/[0-9]{2,3}-? ?[0-9]{6,7}/;
    
    if(!patronId.test(sId)){
        
        var oBloque=document.getElementById("bloqueIdProveedor");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloqueIdProveedor");
        oBloque.className='form-group';

    }
    
    if(sNombre===""){
        
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
    }
    
    return bValido;
}

function validarPersonal(evento){
    
    var oEvento = evento || window.event  
    
    oEvento.preventDefault(); 
    
    if(validarCamposTextoPersonal()){
       
       return true;
    }
    else{
          
       alert("error");
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
    
    var patronId=/([A-Z]{1})+([0-9]{5})/;
    var patronNum=/([1-9]{1})+([0-9]{4})/;
       
    if(!patronId.test(sId)){
        
        var oBloque=document.getElementById("bloque-alta-id");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloque-alta-id");
        oBloque.className='form-group';

    }
    
    if(sNombre===""){
        
        var oBloque=document.getElementById("bloque-alta-nombre");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloque-alta-nombre");
        oBloque.className='form-group';

    }
    
    if(sApellidos===""){
        
        var oBloque=document.getElementById("bloque-alta-apellido");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloque-alta-apellido");
        oBloque.className='form-group';

    }
    
    if(sFecha===""){
        
        bValido=false;
    }
    
    if (bValido){
        if(sTipo=="1"){

            if(isNaN(iDepart) || iDepart===""){

                var oBloque=document.getElementById("bloqueDepartamento");
                oBloque.className='form-group has-error';
                bValido=false;
            }
            else{

                var oBloque=document.getElementById("bloqueDepartamento");
                oBloque.className='form-group';
                var oPersonal=new Administrativo(sId, sNombre, sApellidos, sFecha, iDepart);
                oClinica.altaPersonal(oPersonal);
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
                    actualizarSelectDentista(sNombre,sApellidos,sId);
                }
            }
        }
    }
    return bValido;
}

function actualizarSelectDentista(sNombre,sApellidos,sId){
    
    var oSelect=document.getElementById("dentistaCita");
    var oOption=document.createElement("option");
    oOption.value=sId;
    oOption.text=sApellidos+", "+sNombre;
    oSelect.appendChild(oOption);
 
}

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

/*LISTAR PERSONAL*/
function listarPersonal(evento){
    
    mostrarListadoPersonal();
    
    var oEvento = evento || window.event  
    
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


