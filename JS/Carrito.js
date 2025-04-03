const Min = 1;

document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("detalle");

    if (sessionStorage.getItem("Usuario") != null) {
        let sesion = sessionStorage.getItem("Usuario");
        let contenedor = document.getElementById("Cte");
        contenedor.innerHTML = "<h3>Este es tu carrito, "+ sesion +"</h3>";
    }
    if (sessionStorage.getItem("Carrito") != null) {
        let carrito = [];
        carrito = JSON.parse(sessionStorage.getItem("Carrito"));

        CargarCards(carrito)
    }
});


function CargarCards(carrito) {
    let titulo = document.getElementById("nombreproducto");
    let precio = document.getElementById("Precio");
    let cant = document.getElementById("Cant");

    let cantproductos= document.getElementById("cantp");
    let Subtotal= document.getElementById("total");
    let Resumencant=0;
    let Resumentotal=0;

    carrito.array.forEach((producto, index) => {
        if(index<Min){
            titulo.innerText = producto.Titulo;
            precio.innerText ='$' + (producto.Cantidad * producto.Precio);
            cant.innerText = producto.Precio;
        }
        else{
            PlantillaCard(producto.Titulo, producto.Precio, producto.Cantidad)
        }
        Resumencant += producto.Cantidad;
        Resumentotal += (producto.Cantidad * producto.Precio);
    });
    cantproductos.innerText = "Productos: " + Resumencant;
    Subtotal.innerText += 'Sub-total: $'+ Resumentotal;
}

function PlantillaCard(titulo, precio, cant){
    let newPlantilla = document.createElement("div");
    newPlantilla.innerHTML='<div id="detalle"><img class="IMG" src="IMG/LogoCarrito.png" alt="Descripción de la imagen" width="50" height="35"><div class="nombreproducto"><h4 id="nombreproducto">'+titulo+'</h4></div><div  class="aumentar"><h5>Cantidad</h5><div class="incrementador"><button type="button" class="btn btn-primary" onclick="reducir('+"'"+ titulo +"'"+')"> - </button><a> '+ cant +' </a><button type="button" class="btn btn-primary" onclick="incrementar('+"'"+ titulo +"'" +')"> + </button></div><p id="Precio">$'+(precio*cant)+'</p></div></div>';
    
    document.getElementById("sec1").appendChild(newPlantilla);
}

function incrementar(titulo){
    let carrito = JSON.parse(sessionStorage.getItem("Carrito")) || [];
    const Producto = carrito.find((elemnto) => elemnto.Titulo === titulo)

    if(Producto){
        Producto.Cantidad++;
    }
    else{
        if(titulo=='1ro'){
            carrito[0].Cantidad++;
        }
    }
    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
}

function reducir (titulo){
    let carrito = JSON.parse(sessionStorage.getItem("Carrito")) || [];
    const Producto = carrito.find((elemnto) => elemnto.Titulo === titulo)

    if(Producto){
        Producto.Cantidad++;
    }
    else{
        if(titulo=='1ro'){
            carrito[0].Cantidad--;
        }
    }
    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
}