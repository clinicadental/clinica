/*----CLINICA----*/
function Clinica(){
    this.personal=new Array();
    this.citas=new Array();
    this.clientes=new Array();
    this.pagos=new Array();
    this.salas=new Array();
    this.proveedores=new Array();
    this.materiales=new Array();	
}


/*----CLIENTES----*/
function Cliente(iId, sNombre, sApellidos, sTelefono){
    this.id=iId;
    this.nombre=sNombre;
    this.apellidos=sApellidos;
    this.telefono=sTelefono;
    this.citas=new Array();
}
Clinica.prototype.altaCliente=function(oCliente){
    
    var oClienteExistente=this.buscaCliente(oCliente.id);
    
    if(typeof oClienteExistente==="undefined"){
        
        this.clientes.push(oCliente);
        mensaje("Cliente añadido");
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("Ya existe un cliente con ese ID");
    }
};
Clinica.prototype.buscaCliente=function(sId){
    
    var oCliente;
    
    if(this.clientes.length<1){
        
    }
    else{
        
        for(var i=0;i<this.clientes.length;i++){
            
            if(this.clientes[i].id===sId){
                
                oCliente=this.clientes[i];
            }
        }
    }
    
    return oCliente;
};
Clinica.prototype.bajaCliente=function(oCliente){
    
    for(var i=0;i<this.clientes.length;i++){
        
        if(oCliente===this.clientes[i]){
            
            this.clientes.splice(i,1);
            actualizarSelectCliente();
            mensaje("Cliente borrado");
        }
    }
};
Cliente.prototype.toHTMLRow=function(){
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.nombre);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.apellidos);
    var celda4 = document.createElement("td");
    var textoCelda4 = document.createTextNode(this.telefono);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    oFila.appendChild(celda4);
    
    return oFila;
};


/*----CITAS----*/
function Cita(sId,oDentista, oCliente, dFechaCita, iSala, sProcedimiento, sDescripcion, bAtendida){
    this.id=sId;
    this.dentista=oDentista;
    this.cliente=oCliente;
    this.fechacita=dFechaCita;
    this.sala=iSala;
    this.procedimiento=sProcedimiento;
    this.descripcion=sDescripcion;
    this.atendida=bAtendida;	
}
Clinica.prototype.altaCita=function(oCita,oCliente,oDentista){
    
    var oCitaExistente=this.buscaCita(oCita.id);
    
    if(typeof oCitaExistente==="undefined"){
        
        this.citas.push(oCita);
        mensaje("Cita añadida");
        
        for(var i=0;i<this.clientes.length;i++){
        
            if(this.clientes[i]===oCliente){

                this.clientes[i].citas.push(oCita);
            }
        }
    
        for(var i=0;i<this.personal.length;i++){

            if(this.personal[i]===oDentista){

                this.personal[i].citas.push(oCita);
            }
        }
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("Ya existe una cita con ese ID");
    }
};
Clinica.prototype.buscaCita=function(sId){
    
    var oCita;
    
    if(this.citas.length<1){
        
    }
    else{
        
        for(var i=0;i<this.citas.length;i++){
            
            if(this.citas[i].id===sId){
                
                oCita=this.citas[i];
            }
        }
    }
    
    return oCita;
};
Clinica.prototype.bajaCita=function(oCita){
    
    for(var i=0;i<this.citas.length;i++){
        
        if(oCita===this.citas[i]){
            
            this.citas.splice(i,1);
            actualizarSelectCita();
            mensaje("Cita borrada");
        }
    }
};
Cita.prototype.toHTMLRow=function(){
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.fechacita);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.procedimiento);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.descripcion);
    var celda4 = document.createElement("td");
    var textoCelda4;
    
    if(this.atendida){
        textoCelda4 = document.createTextNode("Sí");
    }     
    else{
        textoCelda4 = document.createTextNode("No");
    }
        
    var celda5 = document.createElement("td");
    var textoCelda5 = document.createTextNode(this.dentista.apellidos+", "+this.dentista.nombre);
    var celda6 = document.createElement("td");
    var textoCelda6 = document.createTextNode(this.cliente.apellidos+", "+this.cliente.nombre);
    var celda7 = document.createElement("td");
    var textoCelda7 = document.createTextNode(this.sala);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);
    celda5.appendChild(textoCelda5);
    celda6.appendChild(textoCelda6);
    celda7.appendChild(textoCelda7);
    
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    oFila.appendChild(celda4);
    oFila.appendChild(celda5);
    oFila.appendChild(celda6);
    oFila.appendChild(celda7);
    
    return oFila;
};


/*----PROVEEDORES----*/
function Proveedor(iId, sNombre, sTelefono){
    this.id=iId;
    this.nombre=sNombre;
    this.telefono=sTelefono;	
}
Clinica.prototype.altaProveedor=function(oProveedor){
    
    var oProveedorExistente=this.buscaProveedor(oProveedor.id);
    
    if(typeof oProveedorExistente==="undefined"){
        
        this.proveedores.push(oProveedor);
        mensaje("Proveedor añadido");
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("Ya existe un proveedor con ese ID");
    }
};
Clinica.prototype.buscaProveedor=function(sId){
    
    var oProveedor;
    
    if(this.proveedores.length<1){
        
    }
    else{
        
        for(var i=0;i<this.proveedores.length;i++){
            
            if(this.proveedores[i].id===sId){
                
                oProveedor=this.proveedores[i];
            }
        }
    }
    
    return oProveedor;
};
Clinica.prototype.bajaProveedor=function(oProveedor){
    
    for(var i=0;i<this.proveedores.length;i++){
        
        if(oProveedor===this.proveedores[i]){
            
            this.proveedores.splice(i,1);
            actualizarSelectProveedores();
            mensaje("Proveedor borrado");
        }
    }
};
Proveedor.prototype.toHTMLRow=function(){   
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.nombre);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.telefono);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    
    return oFila;
};


/*----MATERIALES----*/
function Material(sId, sTipo, iCantidad, oProveedor){
    this.id=sId;
    this.tipo=sTipo;
    this.cantidad=iCantidad;
    this.proveedor=oProveedor;
}
Clinica.prototype.altaMaterial=function(oMaterial){ 
    var oMaterialExistente=this.buscaMaterial(oMaterial.id);
    if(typeof oMaterialExistente=="undefined"){   
        this.materiales.push(oMaterial);
        actualizarSelectMateriales2();
        mensaje("Material añadido.");
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("Ya existe un material con este ID.");
    }
};
Clinica.prototype.buscaMaterial=function(sId){
    var oMaterial;
    if(this.materiales.length<1){
        
    }
    else{
        for(var i=0;i<this.materiales.length;i++){
            if(this.materiales[i].id==sId){
                oMaterial=this.materiales[i];
            }
        }
    }
    return oMaterial;
};
Clinica.prototype.bajaMaterial=function(oMaterial){
    for(var i=0;i<this.materiales.length;i++){
        if(oMaterial==this.materiales[i]){
            this.materiales.splice(i,1);
            actualizarSelectMateriales2();
            mensaje("Material borrado.");
        }
    }
};
Material.prototype.toHTMLRow=function(){
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.tipo);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.cantidad);
    var celda4 = document.createElement("td");
    var textoCelda4 = document.createTextNode(this.proveedor.nombre);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    oFila.appendChild(celda4);

    return oFila;
};


/*----PERSONAL----*/
function Personal(iId, sNombre, sApellidos, dFechaAlta){
    this.id=iId;
    this.nombre=sNombre;
    this.apellidos=sApellidos;
    this.fechaalta=dFechaAlta;	
}
Clinica.prototype.altaPersonal=function(oPersonal){
    
    var oPersonalExistente=this.buscaPersonal(oPersonal.id);
    
    if(typeof oPersonalExistente==="undefined"){
        
        this.personal.push(oPersonal);
        mensaje("Personal añadido");
        actualizarSelectPersonal();
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("Ya existe un miembro con ese ID");
    }
};

Clinica.prototype.buscaPersonal=function(sId){
    
    var oPersonal;
    
    if(this.personal.length<1){
        
    }
    else{
        
        for(var i=0;i<this.personal.length;i++){
            
            if(this.personal[i].id===sId){
                
                oPersonal=this.personal[i];
            }
        }
    }
    
    return oPersonal;
};

Clinica.prototype.bajaPersonal=function(oPersonal){
    for(var i=0;i<this.materiales.length;i++){
        if(oPersonal==this.personal[i]){
            this.personal.splice(i,1);
            actualizarSelectPersonal();
            actualizarSelectDentista();
            mensaje("Miembro de personal borrado.");
        }
    }
};


/*----PERSONAL ADMINISTRATIVO----*/
function Administrativo(iId, sNombre, sApellidos, dFechaAlta, iDepartamento){
    Personal.call(this, iId, sNombre, sApellidos, dFechaAlta);
    this.departamento=iDepartamento;
}
Administrativo.prototype=Object.create(Personal.prototype);
Administrativo.prototype.constructor=Administrativo;
Administrativo.prototype.toHTMLRow=function(){
    
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.nombre);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.apellidos);
    var celda4 = document.createElement("td");
    var textoCelda4 = document.createTextNode(this.fechaalta);
    var celda5 = document.createElement("td");
    var textoCelda5 = document.createTextNode(this.departamento);
    var celda6 = document.createElement("td");
    var textoCelda6 = document.createTextNode(" - ");
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);
    celda5.appendChild(textoCelda5);
    celda6.appendChild(textoCelda6);
    
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    oFila.appendChild(celda4);
    oFila.appendChild(celda5);
    oFila.appendChild(celda6);
    
    return oFila;
};

Administrativo.prototype.toHTMLRowSeparado=function(){
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.nombre);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.apellidos);
    var celda4 = document.createElement("td");
    var textoCelda4 = document.createTextNode(this.fechaalta);
    var celda5 = document.createElement("td");
    var textoCelda5 = document.createTextNode(this.departamento);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);
    celda5.appendChild(textoCelda5);
    
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    oFila.appendChild(celda4);
    oFila.appendChild(celda5);
    
    return oFila;
};


/*----PERSONAL DENTISTA----*/
function Dentista(iId, sNombre, sApellidos, dFechaAlta, iNumero){
    Personal.call(this, iId, sNombre, sApellidos, dFechaAlta);
    this.numero=iNumero;
    this.citas=new Array();
}
Dentista.prototype=Object.create(Personal.prototype);
Dentista.prototype.constructor=Dentista;
Dentista.prototype.toHTMLRow=function(){
    
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.nombre);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.apellidos);
    var celda4 = document.createElement("td");
    var textoCelda4 = document.createTextNode(this.fechaalta);
    var celda5 = document.createElement("td");
    var textoCelda5 = document.createTextNode(" - ");
    var celda6 = document.createElement("td");
    var textoCelda6 = document.createTextNode(this.numero);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);
    celda5.appendChild(textoCelda5);
    celda6.appendChild(textoCelda6);
    
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    oFila.appendChild(celda4);
    oFila.appendChild(celda5);
    oFila.appendChild(celda6);
    
    return oFila;
};

Dentista.prototype.toHTMLRowSeparado=function(){
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.nombre);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.apellidos);
    var celda4 = document.createElement("td");
    var textoCelda4 = document.createTextNode(this.fechaalta);
    var celda6 = document.createElement("td");
    var textoCelda6 = document.createTextNode(this.numero);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);
    celda6.appendChild(textoCelda6);
    
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    oFila.appendChild(celda4);
    oFila.appendChild(celda6);
    
    return oFila;
};


/*----PAGOS----*/
function Pago(iId,fImporte,bPagado,oCliente){
    this.id=iId;
    this.importe=fImporte;
    this.pagado=bPagado;
    this.cliente=oCliente;
}
Clinica.prototype.altaPago=function(oPago){
    var oPagoExistente=this.buscaPago(oPago.id);
    if(typeof oPagoExistente=="undefined"){
        this.pagos.push(oPago);
        actualizarSelectPagos();
        mensaje("Pago añadido");
    }
    else{
        var oCapaMensaje=document.getElementById("mensajes");
        oCapaMensaje.className="alert alert-danger"; 
        mensaje("Ya existe un pago con ese ID");
    }
};
Clinica.prototype.buscaPago=function(sId){
    var oPago;
    if(this.pagos.length<1){
    
    }
    else{    
        for(var i=0;i<this.pagos.length;i++){   
            if(this.pagos[i].id==sId){  
                oPago=this.pagos[i];
            }
        }
    }
    return oPago;
};
Clinica.prototype.bajaPago=function(oPago){
    for(var i=0;i<this.pagos.length;i++){
        if(oPago==this.pagos[i]){
            this.pagos.splice(i,1);
            actualizarSelectPagos();
            mensaje("Pago borrado.");
        }
    }
};
Pago.prototype.toHTMLRow=function(){
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.importe+"€");
    var celda3 = document.createElement("td");
    var textoCelda3;
    
    if(this.pagado){
        textoCelda3 = document.createTextNode("Sí");
    }     
    else{
        textoCelda3 = document.createTextNode("No");
    }
    
    var celda4 = document.createElement("td");
    var textoCelda4 = document.createTextNode(this.cliente.apellidos+", "+this.cliente.nombre);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    oFila.appendChild(celda4);
    
    return oFila;
};


/*----SALAS----*/
function Sala(iId,sNombre,sTipo){
    this.id=iId;
    this.nombre=sNombre;
    this.tipo=sTipo;
}
Sala.prototype.toHTMLRow=function(){
    var oFila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var textoCelda1 = document.createTextNode(this.id);
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(this.nombre);
    var celda3 = document.createElement("td");
    var textoCelda3 = document.createTextNode(this.tipo);
    
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    oFila.appendChild(celda1);
    oFila.appendChild(celda2);
    oFila.appendChild(celda3);
    
    return oFila;
};