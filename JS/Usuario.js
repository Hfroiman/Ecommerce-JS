const botonconfirmar = document.getElementById("btnconfirmar");

botonconfirmar.onclick = ()=> {
    try{
        const Usuario = document.getElementById("txtusuario").value;
        const pass = document.getElementById("txtpassword").value;

        if(document.getElementById("txtusuario").value != ""){
            pass==""?
                alert("Para continuar es necesario que ingreses la contraseña."):
                (sessionStorage.setItem("Usuario",Usuario),window.location.href="index.html");
        }
    }
    catch(error){
        prompt("Error: " + error);
    }
}