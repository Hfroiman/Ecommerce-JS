
const Min = 1;
let container = document.getElementById("detalle");

if (sessionStorage.getItem("Usuario") != null) {
    let sesion = sessionStorage.getItem("Usuario");
    let contenedor = document.getElementById("Cte");
    contenedor.innerHTML = "<h3>Este es tu carrito, " + sesion + "</h3>";
}
if (sessionStorage.getItem("Carrito") != null) {
    let carrito = [];
    carrito = JSON.parse(sessionStorage.getItem("Carrito"));
    if (!Array.isArray(carrito)) {
        carrito = [carrito];
    }
    CargarCards(carrito)
}

function CargarCards(carrito) {
    const img = document.getElementById("img");
    const titulo = document.getElementById("nombreproducto");
    const precio = document.getElementById("Precio");
    const cant = document.getElementById("Cant");
    const cantproductos = document.getElementById("cantp");
    const Subtotal = document.getElementById("total");
    let Resumencant = 0;
    let Resumentotal = 0;

    carrito.forEach((producto, index) => {
        if (index < Min) {
            img.innerHTML = '<img class="IMG" src="' + producto.IMG + '" alt="IMG/LogoCarrito.png">'
            titulo.innerText = producto.Titulo;
            precio.innerText = '$' + producto.Cantidad * producto.Precio;
            cant.innerText = producto.Cantidad;
        }
        else {
            PlantillaCard(producto.Id, producto.Titulo, producto.Precio, producto.Cantidad, producto.IMG)
        }
        Resumencant += producto.Cantidad;
        Resumentotal += producto.Cantidad * producto.Precio;
    });
    cantproductos.innerText = "Productos: " + Resumencant;
    Subtotal.innerText = 'Sub-total: $' + Resumentotal;
}

function PlantillaCard(Id, titulo, precio, cant, IMG) {
    let newPlantilla = document.createElement("div");
    newPlantilla.innerHTML = '<div id="detalle"><img class="IMG" src="' + IMG + '" alt="IMG/LogoCarrito.png"><div class="nombreproducto"><h4 id="nombreproducto">' + titulo + '</h4></div><div  class="aumentar"><h5>Cantidad</h5><div class="incrementador"><button type="button" class="btn btn-primary" onclick="reducir(' + "'" + Id + "'" + ')"> - </button><a> ' + cant + ' </a><button type="button" class="btn btn-primary" onclick="incrementar(' + "'" + Id + "'" + ')"> + </button></div><p id="Precio">$' + (precio * cant) + '</p></div></div>';

    document.getElementById("sec1").appendChild(newPlantilla);
}

function incrementar(id) {
    debugger
    let carrito = JSON.parse(sessionStorage.getItem("Carrito")) || [];
    const Producto = carrito.find((elemnto) => elemnto.Id === id)

    if (Producto) {
        Producto.Cantidad++;
    }
    else {
        if (id == '1ro') {
            carrito[0].Cantidad++;
        }
    }
    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
    location.reload();
}

function reducir(id) {
    let carrito = JSON.parse(sessionStorage.getItem("Carrito")) || [];
    debugger
    const Producto = carrito.find((elemnto) => elemnto.Id === id)
    if (Producto) {
        Producto.Cantidad>1? Producto.Cantidad--:carrito.splice(Indice(id, carrito),1)
    }
    else {
        if (id == '1ro') {
            carrito[0].Cantidad>1?carrito[0].Cantidad--:carrito.splice(carrito[0],1)
        }
    }
    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
    location.reload();
}

function Indice(id, carrito){
    carrito.forEach((el)=>{
        if(el.Id==id){
            return el.Id;
        }
    })
}