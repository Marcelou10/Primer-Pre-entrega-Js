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
        producto = prompt ('¿Queres comprar el mouse Logitech G Pro X Superlight, mouse Pulsar X2 Mini Wireless o el mouse Vaxee Xe Orange ?')
        cantidad = parseInt(prompt('¿cuantos deseas comprar?'))

        while (isNaN (cantidad) || (cantidad) === 0) {
            alert("Debe ingresar una cantidad valida")
            cantidad = parseInt(prompt('¿cuantos deseas comprar?'))}
    
    switch (producto) {
    case 'mouse Logitech G pro X Superlight':
        precio = 148;
        break;
    case 'mouse Pulsar X2 Mini Wireless':
        precio = 95;
        break;
    case 'mouse Vaxee Xe Orange':
        precio = 70;
        break;
        default:
        alert('un caracter no es valido, ingrese de nuevo')
        cantidad = 0;
        precio = 0;
            break;}
    
    subtotal += precio * cantidad

    seguirComprando = confirm('¿Desea seguir comprando?')
    } while (seguirComprando)

    console.log(subtotal)
}



comprarProducto()