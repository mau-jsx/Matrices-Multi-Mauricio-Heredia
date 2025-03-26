const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let matriz = [];

function mostrarMenu() {
  console.log("\n--- Menú ---");
  console.log("1. Ingresar nueva persona");
  console.log("2. Mostrar todos los datos");
  console.log("3. Filtrar por DNI");
  console.log("4. Salir");
}

function ingresarPersona() {
  rl.question('Ingresa el nombre: ', (nombre) => {
    rl.question('Ingresa el apellido: ', (apellido) => {
      rl.question('Ingresa el DNI: ', (dni) => {
        rl.question('Ingresa los teléfonos separados por comas: ', (telefonos) => {
          rl.question('Ingresa los nombres de los hijos separados por comas: ', (hijos) => {
            const persona = [nombre, apellido, dni, telefonos.split(','), hijos.split(',')];
            matriz.push(persona);
            console.log("Persona ingresada exitosamente.");
            mostrarMenuYEsperarOpcion();
          });
        });
      });
    });
  });
}

function mostrarDatos() {
  if (matriz.length === 0) {
    console.log("No hay datos para mostrar.");
    mostrarMenuYEsperarOpcion();
    return;
  }

  console.log("\nDatos ingresados:");
  matriz.forEach(persona => {
    const [nombre, apellido, dni, telefonos, hijos] = persona;
    console.log(`${nombre} ${apellido}, DNI: ${dni}, Teléfonos: ${telefonos.length} teléfono(s), Hijos: ${hijos.length}`);
  });

  console.log("\nMatriz de datos:");
  console.log(matriz);
  mostrarMenuYEsperarOpcion();
}

function filtrarPorDNI() {
  rl.question('Ingresa el DNI para filtrar: ', (dni) => {
    const persona = matriz.find(p => p[2] === dni);
    if (persona) {
      const [nombre, apellido, _, telefonos, hijos] = persona;
      console.log(`\nDatos de ${nombre} ${apellido}:`);
      console.log(`DNI: ${dni}, Teléfonos: ${telefonos.length} teléfono(s), Hijos: ${hijos.length}`);
    } else {
      console.log("No se encontró una persona con ese DNI.");
    }
    mostrarMenuYEsperarOpcion();
  });
}

function mostrarMenuYEsperarOpcion() {
  mostrarMenu();
  rl.question('Elige una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        ingresarPersona();
        break;
      case '2':
        mostrarDatos();
        break;
      case '3':
        filtrarPorDNI();
        break;
      case '4':
        console.log("Saliendo del programa.");
        rl.close();
        break;
      default:
        console.log("Opción no válida. Por favor, elige una opción válida.");
        mostrarMenuYEsperarOpcion();
    }
  });
}

mostrarMenuYEsperarOpcion();
