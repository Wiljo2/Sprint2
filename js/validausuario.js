function validar_formulario(){
	var usuario = document.formulario.usuario;
	var correo = document.formulario.email;
	var password1 = document.formulario.password;  
	var usuario_len = usuario.value.length;
	if(usuario_len == 0 || usuario_len < 8) {
	   alert("Debes ingresar un usuario con minimo 8 caracteres");
	}
   
	var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!correo.value.match(formatoCorreo))
	{
	   alert("Debes ingresar un correo electronico valido!");
   
   }
	 var p = password1.value.length;
   
	if (p == 0 || p < 8)
	{
	   alert("Debes ingresar una clave con mas de 8 caracteres");
   
	}
   else{
	   alert("Usuario Creado con exito ");
   }
   } 