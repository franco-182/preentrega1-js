// Clase Producto
class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
  }
}

// Crear objetos Producto
const adidas = new Producto(1, "adidas", 40000, "img/adidas-lucas.jpg");
const etnies = new Producto(2, "etnies", 15000, "img/etnies.jpg");
const vans = new Producto(3, "vans", 20000, "img/vans.jpg");
const dc = new Producto(4, "dc-kalis", 25000, "img/dc-kalis.jpg");
const emerica = new Producto(5, "emerica", 30000, "img/emerica.jpg");
const converse = new Producto(6, "converse", 20000, "img/converse.jpg");
const nike = new Producto(7, "nike", 20000, "img/nike.jpg");
const vans2 = new Producto(8, "vans-sk8", 13000, "img/vans-sk8.jpg");

// Array de productos
const productos = [adidas, etnies, vans, dc, emerica, converse, nike, vans2];

// Array vacío para el carrito
let carrito = [];

//cargar carrito desde el localstorage

if(localStorage.getItem("carrito")){
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

// Modificar DOM para mostrar los productos
const contenedorProductos = document.getElementById("contenedorProductos");

// Función para mostrar los productos
const mostrarProductos = () => {
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("col-xl-3", "col-md-6");
    card.innerHTML = `
      <div class="card">
        <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
        <div>
          <h5>${producto.nombre}</h5>
          <p>${producto.precio}</p>
          <button class="btn colorBoton" id="boton${producto.id}" >Agregar al Carrito</button>
        </div>
      </div>
    `;
    contenedorProductos.appendChild(card);

    // Agregar productos al carrito
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
};
mostrarProductos();

// Función agregar al carrito
const agregarAlCarrito = (id) => {
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    const producto = productos.find((producto) => producto.id === id);
    carrito.push(producto);

  }
  calcularTotal()
  //localstorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//mostrar el carrito de compras

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
  mostrarCarrito();
})

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("col-xl-3", "col-md-6");
    card.innerHTML = `
      <div class="card">
        <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
        <div>
          <h5>${producto.nombre}</h5>
          <p>${producto.precio}</p>
          <p>${producto.cantidad}</p>
          <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar </button>
        </div>
      </div>
    `;
    contenedorCarrito.appendChild(card)

    //eliminar productos del carrito
    const boton = document.getElementById(`eliminar${producto.id}`);
    boton.addEventListener("click", () => {
      eliminarDelCarrito(producto.id);
    })
  })
  calcularTotal()
}

//funcion para eliminar producto del carrito

const eliminarDelCarrito = (id) => {
  const producto = carrito.find(producto => producto.id === id);
  const indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
  mostrarCarrito();

  //localstorage
  localStorage.setItem("carrito", JSON.stringify(carrito));
}


//total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
  let totalCompra = 0;
  carrito.forEach(producto => {
    totalCompra += producto.precio * producto.cantidad;
  })
  total.innerHTML = `total: $${totalCompra}`;
}


//vaciar el carrito

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
  eliminarTodoElCarrito();
});
const eliminarTodoElCarrito = () => {
  carrito = [];
  mostrarCarrito();

  //localstorage
  localStorage.clear();
}