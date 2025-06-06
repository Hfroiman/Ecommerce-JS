const Productos = [];
Productos.push({ Id: "0", Titulo: "SMART 32", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 10000, IMG: "IMG/32.png", Cantidad:12, Contador:1});
Productos.push({ Id: "1", Titulo: "SMART 42", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 25000, IMG: "IMG/42.png", Cantidad:15, Contador:1});
Productos.push({ Id: "2", Titulo: "SMART 52", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 35000, IMG: "IMG/52.png", Cantidad:10, Contador:1});
Productos.push({ Id: "3", Titulo: "SMART 62", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 45000, IMG: "IMG/62.png", Cantidad:8, Contador:1});
Productos.push({ Id: "4", Titulo: "SMART 72", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 100000, IMG: "IMG/32.png", Cantidad:15, Contador:1});
Productos.push({ Id: "5", Titulo: "SMART 82", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 250000, IMG: "IMG/42.png", Cantidad:11, Contador:1});
Productos.push({ Id: "6", Titulo: "SANSUNG 01", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 1000, IMG: "IMG/s1.png", Cantidad:9, Contador:1});
Productos.push({ Id: "7", Titulo: "SANSUNG 04E", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 1500, IMG: "IMG/s04e.png", Cantidad:7, Contador:1});
Productos.push({ Id: "8", Titulo: "SANSUNG A15", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 2000, IMG: "IMG/sa15.png", Cantidad:22, Contador:1});
Productos.push({ Id: "9", Titulo: "SANSUNG A24", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 3000, IMG: "IMG/sa24.png", Cantidad:15, Contador:1});
Productos.push({ Id: "10", Titulo: "MOTOROLA", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 4000, IMG: "IMG/motorola.png", Cantidad:15, Contador:1});
Productos.push({ Id: "11", Titulo: "SANSUNG S1", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 5500, IMG: "IMG/s1.png", Cantidad:14, Contador:1});



let primer = 1;

try {
    if (sessionStorage.getItem("Usuario") != null) {
        let sesion = sessionStorage.getItem("Usuario");
        let contenedor = document.getElementById("Cte");
        contenedor.innerHTML = "<h3>Bienvenidx " + sesion + "</h3>";
        }
    RecorrercadaProducto(Productos);
}
catch (error) {
    prompt("error: " + error);
}

function RecorrercadaProducto(Productos) {
    try {
        Productos.forEach(elem => {
            CargarCards(elem)
        });
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function CargarCards(elem) {
    try {
        let newPlantilla = document.createElement("div");
        newPlantilla.innerHTML =
            '<div class="card"><div class="img2"><img src="' + elem.IMG + '" class="card-img-top" alt="Prodcuto"></div><div class="titulo"><h2>' + elem.Titulo + '</h2></div><div class="Descripción"><b>' + elem.Descripcion + '</b></div><div class="Btones"><button type="button" class="btn btn-warning" ID="BtnAgregarcarrito" onclick="DetalleProducto(' + elem.Id + ')" >Ver en detalle</button></div></div>';
        primer <= 6 ? (document.getElementById("pr1").appendChild(newPlantilla), primer++) : document.getElementById("pr2").appendChild(newPlantilla);
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function DetalleProducto(id){
    try {
        VerProducto();
        setTimeout(() => {window.location.href = "DetalleProducto.html?Id=" + id;}, 900);
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function VerProducto(){
    try {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 700,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title:"Ver producto",
          });
    }
    catch (error) {
        prompt("error: " + error);
    }
}
