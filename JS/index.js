let primer=1;
try {
    if (sessionStorage.getItem("Usuario") != null) {
        let sesion = sessionStorage.getItem("Usuario");
        let contenedor = document.getElementById("Cte");
        contenedor.innerHTML = "<h3>Bienvenidx " + sesion + "</h3>";
    }
    const Productos =[];
    Productos1linea(Productos);
    const Productos2 =[];
    Productos2linea(Productos2);
        
}
catch (error) {
    prompt("error: " + error);
}

function Productos1linea(Productos){
    try{
        debugger
        Productos.push({Titulo:"SMART 32", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$10000",IMG:"IMG/32.jpg"});
        Productos.push({Titulo:"SMART 42", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$25000",IMG:"IMG/42.jpg"});
        Productos.push({Titulo:"SMART 52", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$35000",IMG:"IMG/52.jpg"});
        Productos.push({Titulo:"SMART 62", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$45000",IMG:"IMG/62.jpg"});
        Productos.push({Titulo:"SMART 32", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$10000",IMG:"IMG/32.jpg"});
        Productos.push({Titulo:"SMART 42", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$25000",IMG:"IMG/42.jpg"});

        if (!Array.isArray(Productos)) {
            Productos = [Productos];
        }

        RecorrercadaProducto(Productos);
    }
    catch(error){
        prompt("error: " + error);
    }
}

function Productos2linea(Productos){
    try{
        Productos.push({Titulo:"SANSUNG 01", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$1000",IMG:"IMG/s1.jpg"});
        Productos.push({Titulo:"SANSUNG 04E", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$1500",IMG:"IMG/s04e.jpg"});
        Productos.push({Titulo:"SANSUNG A15", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$2000",IMG:"IMG/sa15.jpg"});
        Productos.push({Titulo:"SANSUNG A24", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$3000",IMG:"IMG/sa24.jpg"});
        Productos.push({Titulo:"MOTOROLA", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$4000",IMG:"IMG/motorola.jpg"});
        Productos.push({Titulo:"SANSUNG S1", Descripcion:"Some quick example text to build on the card title and make up the bulk of the card's content.", Precio:"$5000",IMG:"IMG/s1.jpg"});

        if (!Array.isArray(Productos)) {
            Productos = [Productos];
        }

        RecorrercadaProducto(Productos);
    }
    catch(error){
        prompt("error: " + error);
    }
}

function RecorrercadaProducto(Productos){
    Productos.forEach(elem => {
        CargarCards(elem)
    });
}

function CargarCards(elem){
    debugger
    let newPlantilla = document.createElement("div");
    newPlantilla.innerHTML='<div class="card"><div class="img"><img src="'+ elem.IMG +'" class="card-img-top" alt="Prodcuto"></div><div class="titulo"><h2>'+elem.Titulo+'</h2></div><div class="Descripción"><b>'+elem.Descripcion+'</b></div><div class="Precio">Precio: '+ elem.Precio +'</div><div class="Btones"><button type="button" class="btn btn-warning">Agregar a carrito</button><button type="button" class="btn btn-primary">Comprar</button></div></div>';
    primer<=6?(document.getElementById("pr1").appendChild(newPlantilla), primer++):document.getElementById("pr2").appendChild(newPlantilla);
}


/*
function AgregarCarrito(titulo, precio, cantidad) {
    const producto = {
        Titulo: titulo,
        Precio: precio,
        Cantidad: cantidad
    };
    ActualizarCarrito(producto);
}

function ActualizarCarrito(producto) {
    let carrito = [];
    if (sessionStorage.getItem("Carrito") != null) {
        carrito = JSON.parse(sessionStorage.getItem("Carrito"));
        
        if (!Array.isArray(carrito)) {
            carrito = [carrito];
        }
    }
    carrito.push(producto);
    let min=1;
    if(min != carrito.length){
        VerificarProductos(carrito, carrito.length)
    }

    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
}

function VerificarProductos(carrito, cant){
    let min=0;
    while(min<cant){
        let indices = [];
        for(let i=min+1; i<cant;i++){
            if(carrito[min].Titulo == carrito[i].Titulo){
                indices.push(i);
            }
        }
        if(indices.length!=0){
            carrito[min].Cantidad += indices.length;
    
            for(let i=0; i<indices.length;i++){
                carrito.splice(indices[i],1);
            }
        }
        min++;
        cant = carrito.length;
    }
}

*/