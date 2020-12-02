function validar_formulario(){
 var usuario = document.formulario.usuario;
 var correo = document.formulario.email;
 var password1 = document.formulario.password;  
 var usuario_len = usuario.value.length;
 var bandera = 0; 
 if(usuario_len == 0 || usuario_len < 8) {
	alert("Debes ingresar un usuario con minimo 8 caracteres");
 }
 
 var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(!correo.value.match(formatoCorreo))
 {
	alert("Debes ingresar un correo electronico valido!");
	correo.value="";
	bandera = 1;
}
  var p = password1.value.length;

 if (p == 0 || p < 8)
 {
	alert("Debes ingresar una clave con mas de 8 caracteres");
	password1.value="";
	bandera = 1;
 }
 {
if(bandera==1){
	return false;

	}
}else{
	alert("Usuario Creado con exito ");
	
	}
}
function mostrarPassword(obj){
	var obj = document.getElementById('password')
	obj.type = "text";

}
function ocultarPassword(obj){



}