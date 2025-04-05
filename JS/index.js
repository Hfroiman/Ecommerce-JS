let primer = 1;

const Productos = [];
Productos.push({ Id: "1", Titulo: "SMART 32", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 10000, IMG: "IMG/32.jpg", Cantidad:1});
Productos.push({ Id: "2", Titulo: "SMART 42", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 25000, IMG: "IMG/42.jpg", Cantidad:1});
Productos.push({ Id: "3", Titulo: "SMART 52", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 35000, IMG: "IMG/52.jpg", Cantidad:1});
Productos.push({ Id: "4", Titulo: "SMART 62", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 45000, IMG: "IMG/62.jpg", Cantidad:1});
Productos.push({ Id: "5", Titulo: "SMART 72", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 100000, IMG: "IMG/32.jpg", Cantidad:1});
Productos.push({ Id: "6", Titulo: "SMART 82", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 250000, IMG: "IMG/42.jpg", Cantidad:1});
Productos.push({ Id: "7", Titulo: "SANSUNG 01", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 1000, IMG: "IMG/s1.jpg", Cantidad:1});
Productos.push({ Id: "8", Titulo: "SANSUNG 04E", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 1500, IMG: "IMG/s04e.jpg", Cantidad:1});
Productos.push({ Id: "9", Titulo: "SANSUNG A15", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 2000, IMG: "IMG/sa15.jpg", Cantidad:1});
Productos.push({ Id: "10", Titulo: "SANSUNG A24", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 3000, IMG: "IMG/sa24.jpg", Cantidad:1});
Productos.push({ Id: "11", Titulo: "MOTOROLA", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 4000, IMG: "IMG/motorola.jpg", Cantidad:1});
Productos.push({ Id: "12", Titulo: "SANSUNG S1", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 5500, IMG: "IMG/s1.jpg", Cantidad:1});

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
    Productos.forEach(elem => {
        CargarCards(elem)
    });
}

function CargarCards(elem) {
    let newPlantilla = document.createElement("div");
    newPlantilla.innerHTML =
        '<div class="card"><div class="img2"><img src="' + elem.IMG + '" class="card-img-top" alt="Prodcuto"></div><div class="titulo"><h2>' + elem.Titulo + '</h2></div><div class="Descripción"><b>' + elem.Descripcion + '</b></div><div class="Precio">Precio: $' + elem.Precio + '</div><div class="Btones"><button type="button" class="btn btn-warning" ID="BtnAgregarcarrito" onclick="Agregaralcarrito(' + elem.Id + ')" >Agregar a carrito</button><button type="button" class="btn btn-primary" id="btncomprar">Comprar</button></div></div>';
    primer <= 6 ? (document.getElementById("pr1").appendChild(newPlantilla), primer++) : document.getElementById("pr2").appendChild(newPlantilla);
}

function Agregaralcarrito(id){
    BuscarCarrito(id)
}

function BuscarCarrito(id){
    for(let i=0; i<Productos.length; i++){
        if(Productos[i].Id == id){
            ActualizarCarrito(Productos[i]);
        }
    }
}

function ActualizarCarrito(elemento) {
    let carrito = [];
    if (sessionStorage.getItem("Carrito") != null) {
        carrito = JSON.parse(sessionStorage.getItem("Carrito"));

        if (!Array.isArray(carrito)) {
            carrito = [carrito];
        }
    }
    debugger
    carrito.push(elemento);
    let min = 1;
    if (min != carrito.length) {
        VerificarProductos(carrito, carrito.length)
    }
    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
}

function VerificarProductos(carrito, cant) {
    debugger
    let bandera = 0;
    while(bandera < cant){
        let contador = 0;
        for(let i=bandera+1;i<cant;i++){
            if(carrito[bandera].Id == carrito[i].Id){
                contador=i;
            }
        }
        if(contador!=0){
            carrito[bandera].Cantidad++;
            carrito.splice(contador,1);
            cant--;
        }
        bandera++;
    }
}
