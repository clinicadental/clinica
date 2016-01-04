window.addEventListener('load',asignarEventos,false);
var oClinica=new Clinica();

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
         
       evento.preventDefault();  
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
    var bValido=true;
    
    if(sId===""){
        
        var oBloque=document.getElementById("bloque-alta-id");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    
    if(sNombre===""){
        
        var oBloque=document.getElementById("bloque-alta-nombre");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    
    if(sApellidos===""){
        
        var oBloque=document.getElementById("bloque-alta-apellido");
        oBloque.className='form-group has-error';
        bValido=false;
    }
    
    return bValido;
}

