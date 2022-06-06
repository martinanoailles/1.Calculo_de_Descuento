//Precio Inicial del Producto $450.50
let precioProducto: number = 450.5;
//Descuento a aplicar del 10%
let descuento10Porciento: number = 0.1;
let totalDescuento: number = precioProducto * descuento10Porciento;
//Precio Final a Mostrar
let precioFinalConDescuento: number = precioProducto - totalDescuento;

//Consola
console.log(precioFinalConDescuento);
