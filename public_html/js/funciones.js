window.addEventListener('load',asignarEventos,false);
/*window.addEventListener('load',mostrarSecciones,false);*/
var oClinica=new Clinica();

window.onload = function() {
  Calendar.setup({
    inputField: "fecha",
    ifFormat:   "%d / %m / %Y",
    button:     "selector"
  });};

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

function asignarEventos(){
    
    var oFormPersonal=document.getElementById("btnAltaPersonal");
    document.getElementById("nombre-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    document.getElementById("apellido-alta-dentista").addEventListener('keypress',validarSinNumeros,false);
    oFormPersonal.addEventListener('click', validar, false);
 
    var oAltaPersonal=document.querySelector("#menu-personal .alta");
    oAltaPersonal.addEventListener('click',mostrarFormAltaPersonal,false);
    
    var radioAdministrativo=document.getElementById("administrativo");
    var radioDentista=document.getElementById("dentista");
    radioAdministrativo.addEventListener('click', comprobarRadio, false);
    radioDentista.addEventListener('click', comprobarRadio, false);
}

function mostrarFormAltaPersonal(){
    
    var oFormulario=document.querySelector("#form-alta-personal");
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
    
    oEvento.preventDefault(); 
    
    if(validarCamposTexto()){
       
       return true;
    }
    else{
          
       alert("error");
       return false;
    }
    

}

function validarCamposTexto(){
    
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
    
    if(sTipo===""){
        
        alert("Seleccione puesto");
        bValido=false;
    }
    
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
                }
            }
        }
    }
    return bValido;
}

