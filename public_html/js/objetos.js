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

//1.2. PERSONAL DENTISTA
function Dentista(iId, sNombre, sApellidos, dFechaAlta, iNumero){
	Personal.call(this, iId, sNombre, sApellidos, dFechaAlta);
	this.numero=iNumero;
	this.citas=new Array();
}
Dentista.prototype=Object.create(Personal.prototype);
Dentista.prototype.constructor=Dentista;

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

//6. PROVEEDOR
function Proveedor(iId, sNombre, sTelefono){
	this.id=iId;
	this.nombre=sNombre;
	this.telefono=sTelefono;	
}

//7. MATERIAL
function Material(iId, sTipo, iCantidad){
	this.id=iId;
	this.tipo=sTipo;
	this.cantidad=iCantidad;	
}