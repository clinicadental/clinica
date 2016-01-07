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

    var oAltaCliente=document.getElementById('altaCliente');
    oAltaCliente.addEventListener('click',mostrarFormAltaCliente,false);
    
    var oAltaCita=document.getElementById('altaCita');
    oAltaCita.addEventListener('click',mostrarFormAltaCita,false);
    
    var oAltaProveedor=document.getElementById('altaProveedor');
    oAltaProveedor.addEventListener('click',mostrarFormAltaProveedor,false);
   
    var oAltaPersonal=document.querySelector("#menu-personal .alta");
    oAltaPersonal.addEventListener('click',mostrarFormAltaPersonal,false);
    
    var oListadoClientes=document.getElementById("listaClientes");
    oListadoClientes.addEventListener('click',listarClientes,false);
    
    document.getElementById("nombre-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellido-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("nombreCliente").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellidosCliente").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("nombreProveedor").addEventListener('keypress',validarSinNumeros,false);
    
    var oFormPersonal=document.getElementById("btnAltaPersonal");
    oFormPersonal.addEventListener('click', validarPersonal, false);
    
    var oFormCliente=document.getElementById("btnAltaCliente");
    oFormCliente.addEventListener('click', validarCliente, false);
    
    var oFormProveedor=document.getElementById("btnAltaProveedor");
    oFormProveedor.addEventListener('click', validarProveedor, false);
    
    var oFormCita=document.getElementById("btnAltaCita");
    oFormCita.addEventListener('click', validarCita, false);
    
    var radioAdministrativo=document.getElementById("administrativo");
    var radioDentista=document.getElementById("dentista");
    radioAdministrativo.addEventListener('click', comprobarRadio, false);
    radioDentista.addEventListener('click', comprobarRadio, false);
    
    
}

/*MOSTRAR FORMULARIOS*/
function mostrarFormAltaCliente(){
    var oFormulario=document.querySelector("#form-alta-clientes");
    oFormulario.style.display="block";
    var oFormulario=document.querySelector("#form-alta-citas");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-proveedores");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-personal");
    oFormulario.style.display="none";
}

function mostrarFormAltaCita(){
    var oFormulario=document.querySelector("#form-alta-clientes");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-citas");
    oFormulario.style.display="block";
    var oFormulario=document.querySelector("#form-alta-proveedores");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-personal");
    oFormulario.style.display="none";
}

function mostrarFormAltaProveedor(){
    var oFormulario=document.querySelector("#form-alta-clientes");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-citas");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-proveedores");
    oFormulario.style.display="block";
    var oFormulario=document.querySelector("#form-alta-personal");
    oFormulario.style.display="none";
}

function mostrarFormAltaPersonal(){ 
    var oFormulario=document.querySelector("#form-alta-clientes");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-citas");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-proveedores");
    oFormulario.style.display="none";
    var oFormulario=document.querySelector("#form-alta-personal");
    oFormulario.style.display="block";
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

function listarClientes(){
    
    var oBloque=document.getElementById("listadoClientes");
    
    var tabla   = document.createElement("table");
    var tBody = document.createElement("tbody");
    
    for (var i=0; i<oClinica.clientes.length; i++) {
        
        var oFila =oClinica.clientes[i].toHTMLRow();
        tBody.appendChild(oFila);
    }
    
    tabla.appendChild(tBody);
    tabla.setAttribute("border", "2");
    oBloque.appendChild(tabla);
  /*var oBloque=document.getElementById("listadoClientes");
    
     var tabla   = document.createElement("table");
     var tblBody = document.createElement("tbody");
 

  for (var i=0; i<oClinica.clientes.length; i++) {
    // Crea las hileras de la tabla
    var oFila = document.createElement("tr");
 
    for (var j=0; j<5; j++) {
      
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(oClinica.clientes[i].id);
      celda.appendChild(textoCelda);
      oFila.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(oFila);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  oBloque.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");*/
}


