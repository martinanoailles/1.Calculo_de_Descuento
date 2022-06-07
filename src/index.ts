//Precio Inicial del Producto $450.50
let precioProducto: number = 450.5;
//Descuento a aplicar del 10%
let descuento10Porciento: number = 0.1;
let totalDescuento: number = precioProducto * descuento10Porciento;
//Precio Final a Mostrar
let precioFinalConDescuento: number = precioProducto - totalDescuento;

//Consola
console.log("El precio final es:" precioFinalConDescuento);

//Otra manera con una variable menos:
let precioProducto1: number = 450.5;
let descuento10Porciento1: number = 0.1;
let precioFinalConDescuento1: number = precioProducto1 - (precioProducto1 * descuento10Porciento1);
console.log ("El mismo precio final es:" precioFinalConDescuento1)

/* Acá lo único que no comprendo es por qué me marca los precioFinalConDescuento
en color rojo. Si le saco el texto de adelante me deja e aparecer en rojo. 
Pero no entiendo por qué asi como esta me lo marca igual. */
