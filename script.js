const productos = [
  {nombre: 'Jalea real', medida: '10 gramos', precio: '4100'},
  {nombre: 'Miel de abejas', medida: '1 kilogramo', precio: '3200'},
  {nombre: 'Miel de abejas', medida: '2 kilogramos', precio: '6200'},
  {nombre: 'Polen granulado ', medida: '500 gramos', precio: '2900'},
  {nombre: 'Caramelos de Propoleo', medida: '20 unidades', precio: '1500'},
  {nombre: 'Crema de ordeñe', medida: '20 centimetros', precio: '900'},
  {nombre: 'Palo catador pequeño', medida: '10 gramos', precio: '2900'},
  {nombre: 'Propoleo natural', medida: '200 gramos', precio: '4900' },
  {nombre: 'Miel en panal', medida: '350 gramos', precio: '2500'},
  {nombre: 'Vela chica en forma de pino', medida: '10 centimetros', precio: '2700'}
]

do {
  let nombre = prompt ("Ingrese el nombre del producto");
  let medida = parseInt(prompt("Ingrese la medida"))
  let precio = parseInt(prompt("Ingrese el precio"));
  productos.push ({nombre, medida, precio});
}
while (confirm("Quiere seguir cargando mercaderia")==true)

const buscar = prompt ('Ingrese el producto que esta buscando');
const encontrar = productos.find((item)=>(item.nombre.toLowerCase)==buscar.toLowerCase);

if (buscar){
  alert('Se encontro el producto')
}
else {
  alert ('No se encontro el producto')
}

function filtrarPorPrecio(productos, precioMaximo) {
  return productos.filter(producto => producto.precio <= precioMaximo);
}

const precioMaximoFiltro = 2500;
const productosFiltrados = filtrarPorPrecio(productos, precioMaximoFiltro);
console.log(productosFiltrados);

productos.forEach(element => {
  console.table(element);
});