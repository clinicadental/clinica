//0. CLINICA
function Clinica(){
    this.personal=new Array();
    this.citas=new Array();
    this.clientes=new Array();
    this.pagos=new Array();
    this.salas=new Array();
    this.proveedores=new Array();
    this.materiales=new Array();	
}

Clinica.prototype.altaPersonal=function(oPersonal){
    
    var oPersonalExistente=this.buscaPersonal(oPersonal.id);
    
    if(typeof oPersonalExistente==="undefined"){
        
        this.personal.push(oPersonal);
        alert("Personal añadido");
    }
    else{
        
        alert("Ya existe un miembro con ese ID");
    }
}

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
}

Clinica.prototype.altaCliente=function(oCliente){
    
    var oClienteExistente=this.buscaCliente(oCliente.id);
    
    if(typeof oClienteExistente==="undefined"){
        
        this.clientes.push(oCliente);
        alert("Cliente añadido");
    }
    else{
        
        alert("Ya existe un cliente con ese ID");
    }
}

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
}

Clinica.prototype.altaProveedor=function(oProveedor){
    
    var oProveedorExistente=this.buscaProveedor(oProveedor.id);
    
    if(typeof oProveedorExistente==="undefined"){
        
        this.proveedores.push(oProveedor);
        alert("Proveedor añadido");
    }
    else{
        
        alert("Ya existe un proveedor con ese ID");
    }
}

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
}

Clinica.prototype.altaCita=function(oCita,oCliente,oDentista){
    
    this.citas.push(oCita);
    
    for(var i=0;i<this.clientes.length;i++){
        
        if(this.clientes[i]==oCliente){
            
            this.clientes[i].citas.push(oCita);
        }
    }
    
    for(var i=0;i<this.personal.length;i++){
        
        if(this.personal[i]==oDentista){
            
            this.personal[i].citas.push(oCita);
        }
    }
    
    alert("Cita añadida");
}

//1. PERSONAL
function Personal(iId, sNombre, sApellidos, dFechaAlta){
    this.id=iId;
    this.nombre=sNombre;
    this.apellidos=sApellidos;
    this.fechaalta=dFechaAlta;	
}

//1.1. PERSONAL ADMINISTRATIVO
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
}

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
}

//1.2. PERSONAL DENTISTA
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
}

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
}

//2. CITA
function Cita(oDentista, oCliente, dFechaCita, iSala, sProcedimiento, sDescripcion, bAtendida){
    this.dentista=oDentista;
    this.cliente=oCliente;
    this.fechacita=dFechaCita;
    this.sala=iSala;
    this.procedimiento=sProcedimiento;
    this.descripcion=sDescripcion;
    this.atendida=bAtendida;	
}

//3. CLIENTE
function Cliente(iId, sNombre, sApellidos, sTelefono){
    this.id=iId;
    this.nombre=sNombre;
    this.apellidos=sApellidos;
    this.telefono=sTelefono;
    this.citas=new Array();
}

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
}

//4. PAGO
function Pago(iId, fImporte, bPagado){
    this.id=iId;
    this.importe=fImporte;
    this.pagado=bPagado;	
}

//5. SALA
function Sala(iId, sNombre, sTipo){
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
}

//6. PROVEEDOR
function Proveedor(iId, sNombre, sTelefono){
    this.id=iId;
    this.nombre=sNombre;
    this.telefono=sTelefono;	
}

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
}


//7. MATERIAL
function Material(iId, sTipo, iCantidad){
    this.id=iId;
    this.tipo=sTipo;
    this.cantidad=iCantidad;	
}