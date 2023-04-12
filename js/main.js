// Declaración de variables
let nombreCliente = prompt("Bienvenido a la tienda de zapatillas de skate. Por favor, ingrese su nombre:");
let saldoCliente = Number(prompt("Por favor, ingrese su saldo en pesos argentinos:"));
let catalogoZapatillas = [
  {
    marca: "Vans",
    modelo: "Sk8-Hi",
    precio: 8000,
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"]
  },
  {
    marca: "Nike",
    modelo: "SB Dunk Low",
    precio: 12000,
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
  },
  {
    marca: "Adidas",
    modelo: "Superstar Vulc",
    precio: 10000,
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"]
  },
  // Nuevo objeto agregado al catálogo
  {
    marca: "DC Shoes",
    modelo: "Court Graffik",
    precio: 9000,
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44"]
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
    let talle = prompt(`Ingrese el talle de las ${zapatilla.marca} ${zapatilla.modelo}:`);
    if (zapatilla.talles.includes(talle)) {
      if (saldoCliente >= zapatilla.precio) {
        saldoCliente -= zapatilla.precio;
        console.log(`¡Felicidades ${nombreCliente}! Has comprado unas ${zapatilla.marca} ${zapatilla.modelo} en talle ${talle} por $${zapatilla.precio}. Tu saldo actual es $${saldoCliente}.`);
      } else {
        console.log(`Lo siento ${nombreCliente}, no tienes suficiente saldo para comprar las ${zapatilla.marca} ${zapatilla.modelo} en talle ${talle}.`);
      }
    } else {
      console.log(`Lo siento ${nombreCliente}, el talle ${talle} no está disponible para las ${zapatilla.marca} ${zapatilla.modelo}.`);
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
    let opcionZapatilla = prompt("Ingrese el número de la zapatilla que desea comprar:");
    let zapatilla = catalogoZapatillas[opcionZapatilla - 1];
    if (zapatilla) {
      let opcionTalle = prompt(`Ingrese el talle que desea para las ${zapatilla.marca} ${zapatilla.modelo}: ${zapatilla.talles.join(", ")}`);
      if (zapatilla.talles.includes(opcionTalle)) {
        if (saldoCliente >= zapatilla.precio) {
          saldoCliente -= zapatilla.precio;
          console.log(`¡Felicidades ${nombreCliente}! Has comprado unas ${zapatilla.marca} ${zapatilla.modelo} en talle ${opcionTalle} por $${zapatilla.precio}. Tu saldo actual es $${saldoCliente}.`);
          zapatilla.talles.splice(zapatilla.talles.indexOf(opcionTalle), 1);
        } else {
          console.log(`Lo siento ${nombreCliente}, no tienes suficiente saldo para comprar las ${zapatilla.marca} ${zapatilla.modelo} en talle ${opcionTalle}.`);
        }
      } else {
        console.log(`Lo siento ${nombreCliente}, el talle ingresado no está disponible para las ${zapatilla.marca} ${zapatilla.modelo}.`);
      }
    } else {
      console.log("La opción ingresada no es válida.");
    }
  } else if (opcionCompra === "N" || opcionCompra === "n") {
    console.log(`Gracias por visitar la tienda, ${nombreCliente}. Tu saldo final es $${saldoCliente}.`);
    break;
  } else {
    console.log("La opción ingresada no es válida.");
  }
}
