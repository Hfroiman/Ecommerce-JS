const botonconfirmar = document.getElementById("btnconfirmar");

botonconfirmar.onclick = ()=> {
    try{
        const Usuario = document.getElementById("txtusuario").value;
        const pass = document.getElementById("txtpassword").value;

        if(document.getElementById("txtusuario").value != ""){
            pass==""?FaltaPasword():IncioCorrecto(Usuario);
        }else{Faltausuario();}
    }
    catch(error){
        prompt("Error: Al iniciar sesion. " + error);
    }
}
function Faltausuario(){
    try {
          Swal.fire({
              title: "Debes ingresar un usuario.",
              icon: "warning",
              draggable: true,
              confirmButtonText:"OK"
            })
      }
      catch (error) {
          prompt("error: " + error);
      }
}

function FaltaPasword(){
    try {
          Swal.fire({
              title: "Debes ingresar una contraseña.",
              icon: "warning",
              draggable: true,
              confirmButtonText:"Continuar"
            })
      }
      catch (error) {
          prompt("error: " + error);
      }
}
function IncioCorrecto(Usuario){
    try {
        sessionStorage.setItem("Usuario",Usuario);
        Swal.fire({
            title: "Has iniciado sesion",
            icon: "success",
            draggable: true,
            confirmButtonText:"Continuar"
          })
        setTimeout(() => {window.location.href = "index.html";}, 1500);
    }
    catch (error) {
        prompt("error: " + error);
    }
}