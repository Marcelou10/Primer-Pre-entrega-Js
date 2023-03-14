//inicio
alert("bienvenido a PeriExport!")

//compra de Productos
const comprarProducto = () => {
    let producto = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false

    do {
        producto = prompt ('¿Queres comprar el mouse Pulsar X2 Mini Wireless o el mouse Vaxee Xe Orange ?')
        cantidad = parseInt(prompt('¿cuantos deseas comprar?'))

        let cantidadValidada =validarCantidad(cantidad)
    
    switch (producto) {
    case 'mouse Pulsar X2 Mini Wireless':
        precio = 95;
        break;
    case 'mouse Vaxee Xe Orange':
        precio = 70;
        break;
        default:
        alert('un caracter no es valido, ingrese de nuevo')
        cantidadValidada = 0;
        precio = 0;
            break;}
    
    subtotal += precio * cantidadValidada

    seguirComprando = confirm('¿Desea seguir comprando?')
    } while (seguirComprando)

    return subtotal
}

const validarCantidad = (cantidad) => {        
    while (Number.isNaN(cantidad) || (cantidad) === 0) {
    alert("Debe ingresar una cantidad valida")
    cantidad = parseInt(prompt('¿cuantos desea comprar?'))}
    
    return cantidad

};

const aplicarDescuento = (subtotal) => {
    const descuento = 0.80

     if (subtotal >= 150){
        alert('has recibido un descuento del 20% por haber gastado mas de $150!')
        return subtotal * descuento
     }else{
        return subtotal
     }
};

const calcularEnvio = (subtotal) => {
     const quiereEnvio = confirm ('¿enviar a domicilio?')
    
    if (quiereEnvio && subtotal >= 150){
      alert('tu envio es gratis. el total de tu compra es:$'+subtotal)
    } else if(quiereEnvio && subtotal < 150){
        subtotal += 700
        alert('el envio cuesta 700. el total de la compra es:$'+subtotal)
    } else {
        alert('el total de tu compra es:$'+subtotal)
    }

    return subtotal
};

const finalizarCompra = (precioFinal) => {
    alert('el total de su compra es de $'+precioFinal+ ' gracias por su compra!')

};

const subtotal = comprarProducto()

const subtotalConDescuento = aplicarDescuento(subtotal)

const precioFinal = calcularEnvio(subtotalConDescuento)

finalizarCompra (precioFinal)