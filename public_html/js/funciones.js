window.addEventListener('load',asignarEventos,false);
/*window.addEventListener('load',mostrarSecciones,false);*/
var oClinica=new Clinica();

window.onload = function() {
  Calendar.setup({
    inputField: "fecha",
    ifFormat:   "%d / %m / %Y",
    button:     "selector"
  });};

function asignarEventos(){
    
    var oFormPersonal=document.getElementById("btnAltaDentista");
    document.getElementById("nombre-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellido-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    oFormPersonal.addEventListener('click', validar, false);
 
    var oAltaDentista=document.querySelector("#menu-dentistas .alta");
    oAltaDentista.addEventListener('click',mostrarFormAltaDentista,false);
}

function mostrarFormAltaDentista(){
    
    var oFormulario=document.querySelector("#form-alta-dentista");
    oFormulario.style.display="block";
}

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

function validar(evento){
    
    var oEvento = evento || window.event  
    
    
    if(validarCamposTexto(this) && confirm("¿Desea enviar el formulario?")){
       
       return true;
    }
    else{
         
       oEvento.preventDefault();  
       alert("error");
       return false;
    }
    

}

function validarCamposTexto(){
    
    var sId=document.getElementById("idPersonal").value;
    var sNombre=document.getElementById("nombre-alta-dentista").value;
    var sApellidos=document.getElementById("apellido-alta-dentista").value;
    var sDia=document.getElementById("dia-alta-dentista").value;
    var sMes=document.getElementById("mes-alta-dentista").value;
    var sAnyo=document.getElementById("anyo-alta-dentista").value;
    var iNumCol=document.getElementById("numColeg").value;
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
        bValido=true;
    }
    
    if(sNombre===""){
        
        var oBloque=document.getElementById("bloque-alta-nombre");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloque-alta-nombre");
        oBloque.className='form-group';
        bValido=true;
    }
    
    if(sApellidos===""){
        
        var oBloque=document.getElementById("bloque-alta-apellido");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloque-alta-apellido");
        oBloque.className='form-group';
        bValido=true;
    }
    
    if(!patronNum.test(iNumCol)){
        
        var oBloque=document.getElementById("bloqueNumColeg");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    else{
        
        var oBloque=document.getElementById("bloqueNumColeg");
        oBloque.className='form-group';
        bValido=true;
    }
    
    return bValido;
}

/*MOSTRAR SECCIONES DEL MENÚ
function mostrarSecciones(){
    var listadoClientes=document.querySelector("#listadoClientes");
    listadoClientes.addEventListener('click',mostrarMenuClientes,false); 
    var historialCitas=document.querySelector("#historialCitas");
    historialCitas.addEventListener('click',mostrarMenuCitas,false);
    var listadoProveedores=document.querySelector("#listadoProveedores");
    listadoProveedores.addEventListener('click',mostrarMenuProveedores,false);
    var inventarioMateriales=document.querySelector("#inventarioMateriales");
    inventarioMateriales.addEventListener('click',mostrarMenuMateriales,false);
    var personal=document.querySelector("#personal");
    personal.addEventListener('click',mostrarMenuPersonal,false);
    var controlPagos=document.querySelector("#controlPagos");
    controlPagos.addEventListener('click',mostrarMenuPagos,false);
    var salas=document.querySelector("#salas");
    salas.addEventListener('click',mostrarMenuSalas,false);
}

function mostrarMenuClientes(){
    var menuClientes=document.getElementById("menu-clientes");
    menuClientes.setAttribute('class','visible');
}

function mostrarMenuCitas(){
    var menuCitas=document.getElementById("menu-citas");
    menuCitas.setAttribute('class','visible');
}

function mostrarMenuProveedores(){
    var menuProveedores=document.getElementById("menu-proveedores");
    menuProveedores.setAttribute('class','visible');
}

function mostrarMenuMateriales(){
    var menuMateriales=document.getElementById("menu-materiales");
    menuMateriales.setAttribute('class','visible');
}

function mostrarMenuPersonal(){
    var menuPersonal=document.getElementById("menu-personal");
    menuPersonal.setAttribute('class','visible');
}

function mostrarMenuPagos(){
    var menuPagos=document.getElementById("menu-pagos");
    menuPagos.setAttribute('class','visible');
}

function mostrarMenuSalas(){
    var menuSalas=document.getElementById("menu-salas");
    menuSalas.setAttribute('class','visible');
}*/
