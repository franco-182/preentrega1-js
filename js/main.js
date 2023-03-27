// Declaración de variables
let nombreCliente = prompt("Bienvenido a la tienda de zapatillas de skate. Por favor, ingrese su nombre:");
let saldoCliente = Number(prompt("Por favor, ingrese su saldo en pesos argentinos:"));
let catalogoZapatillas = [
  {
    marca: "Vans",
    modelo: "Sk8-Hi",
    precio: 8000
  },
  {
    marca: "Nike",
    modelo: "SB Dunk Low",
    precio: 12000
  },
  {
    marca: "Adidas",
    modelo: "Superstar Vulc",
    precio: 10000
  }
];

// Función para mostrar el catálogo de zapatillas
function mostrarCatalogo() {
  console.log("CATÁLOGO DE ZAPATILLAS DE SKATE");
  for (let i = 0; i < catalogoZapatillas.length; i++) {
    console.log(`${i + 1}. ${catalogoZapatillas[i].marca} ${catalogoZapatillas[i].modelo} - $${catalogoZapatillas[i].precio}`);
  }
}

// Función para realizar una compra
function comprarZapatillas() {
  let opcion = prompt("Ingrese el número de la zapatilla que desea comprar: \n1. Vans Sk8-Hi - $8000 \n2. Nike SB Dunk Low - $12000 \n3. Adidas Superstar Vulc - $10000");
  let zapatilla = catalogoZapatillas[opcion - 1];
  if (zapatilla) {
    if (saldoCliente >= zapatilla.precio) {
      saldoCliente -= zapatilla.precio;
      console.log(`¡Felicidades ${nombreCliente}! Has comprado unas ${zapatilla.marca} ${zapatilla.modelo} por $${zapatilla.precio}. Tu saldo actual es $${saldoCliente}.`);
    } else {
      console.log(`Lo siento ${nombreCliente}, no tienes suficiente saldo para comprar las ${zapatilla.marca} ${zapatilla.modelo}.`);
    }
  } else {
    console.log("La opción ingresada no es válida.");
  }
}

// Mostrar el catálogo de zapatillas
mostrarCatalogo();

// Bucle para realizar compras
while (saldoCliente > 0) {
  let opcionCompra = prompt("¿Desea comprar alguna zapatilla? (S/N)");
  if (opcionCompra === "S" || opcionCompra === "s") {
    comprarZapatillas();
  } else if (opcionCompra === "N" || opcionCompra === "n") {
    console.log(`Gracias por visitar la tienda, ${nombreCliente}. Tu saldo final es $${saldoCliente}.`);
    break;
  } else {
    console.log("La opción ingresada no es válida.");
  }
}