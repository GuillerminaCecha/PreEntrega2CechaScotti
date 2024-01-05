//Mi idea es: sumar todos los numeros pares del 1 al 10, incluidos. 

// Inicio la variable para almacenar la suma
let suma = 0;

// Bucle for para iterar del 1 al 10
for (let i = 1; i <= 10; i++) {
    
  // El condicional para verificar si el numero es par
  if (i % 2 === 0) {

    // Si es par, lo sumo a la variable "suma"
    suma += i;
  }
}

// Muestro el resultado por consola
console.log("La suma de los números pares del 1 al 10 es: " + suma);