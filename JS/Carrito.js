const Min = 1;
try {    
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
}
catch (error) {
    prompt("error: " + error);
}

function CargarCards(carrito) {
    try {
        const img = document.getElementById("img");
        const titulo = document.getElementById("nombreproducto");
        const precio = document.getElementById("Precio");
        const cant = document.getElementById("Cant");
        const cantproductos = document.getElementById("cantp");
        const Subtotal = document.getElementById("total");
        let Resumencant = 0;
        let Resumentotal = 0;

        debugger
        carrito.forEach((producto) => {
            if(producto.Contador > 0){
                PlantillaCard(producto.Id, producto.Titulo, producto.Precio, producto.Contador, producto.IMG)
                Resumencant += producto.Contador;
                Resumentotal += producto.Contador * producto.Precio;
            }
        });
        cantproductos.innerText = "Productos: " + Resumencant;
        Subtotal.innerText = 'Sub-total: $' + Resumentotal;
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function PlantillaCard(Id, titulo, precio, cant, IMG) {
    try {
        let newPlantilla = document.createElement("div");
        newPlantilla.innerHTML = '<div id="detalle"><img class="IMG" src="' + IMG + '" alt="IMG/LogoCarrito.png"><div class="nombreproducto"><h4>Articulo seleccionado</h4><h4 id="nombreproducto">' + titulo + '</h4></div><div  class="aumentar"><h5>Cantidad</h5><div class="incrementador"><button type="button" class="btn btn-primary" onclick="reducir(' + "'" + Id + "'" + ')"> - </button><a> ' + cant + ' </a><button type="button" class="btn btn-primary" onclick="incrementar(' + "'" + Id + "'" + ')"> + </button></div><p id="Precio">Total $' + (precio * cant) + '</p></div></div>';
    
        document.getElementById("sec1").appendChild(newPlantilla);
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function incrementar(id) {
    try {
        let carrito = JSON.parse(sessionStorage.getItem("Carrito"));
        if (!Array.isArray(carrito)) { carrito = [carrito]; }

        const selecionado = carrito.find((elemnto) => elemnto.Id === id)
        selecionado.Contador < selecionado.Cantidad && selecionado && selecionado.Contador++;

        sessionStorage.setItem("Carrito", JSON.stringify(carrito));
        location.reload();
    }
    catch (error) {
        prompt("error: " + error);
    }
}

function reducir(id) {
    try{
        let carrito = JSON.parse(sessionStorage.getItem("Carrito"));
        if (!Array.isArray(carrito)) { carrito = [carrito]; }
        let seleccionado = carrito.find((pr) => pr.Id == id);

        if(seleccionado.Contador > Min){
            seleccionado.Contador--;
        }else{
            const indice = carrito.findIndex(fr => fr.Id == id);
            carrito.splice(indice,1);
        }
        sessionStorage.setItem("Carrito", JSON.stringify(carrito));
        location.reload();
    }
    catch (error) {
        prompt("error: " + error);
    }
}