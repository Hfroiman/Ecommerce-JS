const Productos = [];
Productos.push({ Id: "0", Titulo: "SMART 32", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 10000, IMG: "IMG/32.png", Cantidad: 12, Contador: 1 });
Productos.push({ Id: "1", Titulo: "SMART 42", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 25000, IMG: "IMG/42.png", Cantidad: 15, Contador: 1 });
Productos.push({ Id: "2", Titulo: "SMART 52", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 35000, IMG: "IMG/52.png", Cantidad: 10, Contador: 1 });
Productos.push({ Id: "3", Titulo: "SMART 62", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 45000, IMG: "IMG/62.png", Cantidad: 8, Contador: 1 });
Productos.push({ Id: "4", Titulo: "SMART 72", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 100000, IMG: "IMG/32.png", Cantidad: 15, Contador: 1 });
Productos.push({ Id: "5", Titulo: "SMART 82", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 250000, IMG: "IMG/42.png", Cantidad: 11, Contador: 1 });
Productos.push({ Id: "6", Titulo: "SANSUNG 01", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 1000, IMG: "IMG/s1.png", Cantidad: 9, Contador: 1 });
Productos.push({ Id: "7", Titulo: "SANSUNG 04E", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 1500, IMG: "IMG/s04e.png", Cantidad: 7, Contador: 1 });
Productos.push({ Id: "8", Titulo: "SANSUNG A15", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 2000, IMG: "IMG/sa15.png", Cantidad: 22, Contador: 1 });
Productos.push({ Id: "9", Titulo: "SANSUNG A24", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 3000, IMG: "IMG/sa24.png", Cantidad: 15, Contador: 1 });
Productos.push({ Id: "10", Titulo: "MOTOROLA", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 4000, IMG: "IMG/motorola.png", Cantidad: 15, Contador: 1 });
Productos.push({ Id: "11", Titulo: "SANSUNG S1", Descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.", Precio: 5500, IMG: "IMG/s1.png", Cantidad: 14, Contador: 1 });


const Min = 1;

try {
    if (sessionStorage.getItem("Usuario") != null) {
        let sesion = sessionStorage.getItem("Usuario");
        let contenedor = document.getElementById("Cte");
        contenedor.innerHTML = "<h3>Este es tu carrito, " + sesion + "</h3>";
    }
    const params = new URLSearchParams(window.location.search);
    const id = params.get("Id");
    ProductoCargadoEnCarrito(id);
}
catch (error) {
    prompt("error: " + error);
}


function ProductoCargadoEnCarrito(id) {

    if (ExisteCarrito()) {
        let carrito = [];
        carrito = JSON.parse(sessionStorage.getItem("Carrito"));
        if (!Array.isArray(carrito)) {
            carrito = [carrito];
        }
        const YaSelecionado = carrito.find((pr) => pr.Id == id);
        YaSelecionado ? CargarDetalle(id, YaSelecionado) : CargarDetalle(id);
    } else {
        CargarDetalle(id);
    }
}

function CargarDetalle(id, prod = false) {
    try {
        const ProductoSeleccionado = Productos.find((pr) => pr.Id == id);
        let Seccion = "";
        prod ?
            (Seccion = '<div class="detalle-btns"><h5>Articulos disponibles: ' + ProductoSeleccionado.Cantidad + '</h5><div><button type="button" class="btn btn-warning" onclick="reducir(' + ProductoSeleccionado.Id + ')"> - </button><a id="Cant"> ' + prod.Contador + ' </a><button type="button" class="btn btn-warning" onclick="incrementar(' + ProductoSeleccionado.Id + ')"> + </button></div></div>') :
            (Seccion = '<div class="detalle-btns"><h5>Articulos disponibles: ' + ProductoSeleccionado.Cantidad + '</h5><div><button type="button" class="btn btn-warning" onclick="reducir(' + ProductoSeleccionado.Id + ')"> - </button><a id="Cant"> ' + ProductoSeleccionado.Contador + ' </a><button type="button" class="btn btn-warning" onclick="incrementar(' + ProductoSeleccionado.Id + ')"> + </button></div></div>');

        if (ProductoSeleccionado) {
            let newPlantilla = document.createElement("div");
            newPlantilla.innerHTML = '<div class="detalle"><div class="sec1-detalle"><div class="img2"><img src="' + ProductoSeleccionado.IMG + '" class="card-img-top" alt="Producto"></div></div><div class="sec2"><div class="sec2a"><div class="titulo"><h1>' + ProductoSeleccionado.Titulo + '</h1></div><div class="Descripción"><h4>' + ProductoSeleccionado.Descripcion + '</h4></div></div><div class="sec2b"><div class="Precio"><h5>Precio: $' + ProductoSeleccionado.Precio + '</h5></div>' + Seccion + '<div class="Btones"><button type="button" class="btn btn-primary" id="btnvolver" onclick="Volver()">Volver</button>   <button type="button" class="btn btn-warning" ID="BtnAgregarcarrito" onclick="Agregaralcarrito(' + ProductoSeleccionado.Id + ')">Agregar al carrito</button></div></div></div></div>';
            document.getElementById("principal").appendChild(newPlantilla);
        }
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function Volver(){
    setTimeout(() => { window.location.href = "index.html"; }, 1000);
}

function Agregaralcarrito(id) {
    try {
        debugger
        let carrito = [];
        if(ExisteCarrito() && NoFueCargado(id)){//HAY CARRITO, VER SI ESTA EN EL CARRITO, SI NO ESTA SE CARGA.-
            carrito = JSON.parse(sessionStorage.getItem("Carrito"));
            carrito.push(Productos.find((pr) => pr.Id == id));
            sessionStorage.setItem("Carrito", JSON.stringify(carrito));
        }else{//NO HAY CARRITO, CREAR Y AGREGAR -- OK
            carrito.push(Productos.find((pr) => pr.Id == id));
            sessionStorage.setItem("Carrito", JSON.stringify(carrito));
        }
        ProductoAgregado();
        setTimeout(() => { window.location.href = "Carrito.html"; }, 1000);
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function NoFueCargado(id){
    return true;
}

function incrementar(id) {
    try {
        debugger
        let carrito;
        if (ExisteCarrito()) {
            carrito = JSON.parse(sessionStorage.getItem("Carrito"));

            if (!Array.isArray(carrito)) { carrito = [carrito]; }
            if (!ProductoEnElCarrito(id, carrito)) {
                carrito.push(Productos[id]);
            }
            const selecionado = carrito.find((elemnto) => elemnto.Id == id);
            selecionado && selecionado.Contador < selecionado.Cantidad && selecionado.Contador++;


        } else {
            carrito = Productos.find((pr) => pr.Id == id);
            carrito.Contador++;
        }
        sessionStorage.setItem("Carrito", JSON.stringify(carrito));
        location.reload();
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function reducir(id) {
    try {
        let carrito;
        if (ExisteCarrito()) {
            carrito = JSON.parse(sessionStorage.getItem("Carrito"));

            if (!Array.isArray(carrito)) { carrito = [carrito]; }
            if (!ProductoEnElCarrito(id, carrito)) { carrito.push(Productos[id]); }

            const selecionado = carrito.find((elemnto) => elemnto.Id == id);
            selecionado && selecionado.Contador > Min && selecionado.Contador--;
        } else {
            carrito = Productos.find((pr) => pr.Id == id);
            carrito.Contador > Min && carrito.Contador--;
        }
        sessionStorage.setItem("Carrito", JSON.stringify(carrito));
        location.reload();
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function ProductoAgregado() {
    try {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 900,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Finalizar compra",
        });
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function ProductoEnElCarrito(id, carrito) {
    try {
        const existe = carrito.find((pr) => pr.Id == id);
        if(existe){
            return true;
        }
        return false;
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function ExisteCarrito() {
    if (sessionStorage.getItem("Carrito") != null) {
        let carrito = [];
        carrito = JSON.parse(sessionStorage.getItem("Carrito"));
        if (!Array.isArray(carrito)) { carrito = [carrito]; }
        return carrito;
    }
    return false;
}