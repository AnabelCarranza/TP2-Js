const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];
const ventas = [
    [100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000',
        'Motherboard ASUS 1500']],
    [100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000',
        'Motherboard ASUS 1500']],
    [100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543',
        'Motherboard MZI', 'HDD Toyiva']],
    [100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543',
        'Motherboard ASUS 1200']],
    [100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000',
        'Motherboard ASUS 1200']],
    [100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543',
        'Motherboard ASUS 1200', 'RAM Quinston']]
]

const precios = [
    ['Monitor GPRS 3000', 200],
    ['Motherboard ASUS 1500', 120],
    ['Monitor ASC 543', 250],
    ['Motherboard ASUS 1200', 100],
    ['Motherboard MZI', 30],
    ['HDD Toyiva', 90],
    ['HDD Wezter Dishital', 75],
    ['RAM Quinston', 110],
    ['RAM Quinston Fury', 230]
];
const sucursales = ['Centro', 'Caballito']


// 1. precioMaquina(componentes): recibe un array de componentes y devuelve el
// precio de la máquina que se puede armar con esos componentes, que es la suma
// de los precios de cada componente incluido

const buscarPrecioPorComponente = (componente) => {
    const indexPrecio = precios.findIndex(precioComponente => precioComponente[0] === componente);
    if (indexPrecio === -1) throw new Error('El precio solicitado no existe')
    return precios[indexPrecio][1];
};

const precioMaquina = (componentes) => {
    return componentes.reduce((acumulador, componente) => acumulador + buscarPrecioPorComponente(componente), 0);
 
//     let total = 0;
//     componentes.forEach((componente, index) => {
//         const precio = buscarPrecioPorComponente(componente);
//         total = total + precio;
//     }); 
//     return total;
};


console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));

//EJ 2
/*
cantidadVentasComponente(componente): recibe el nombre de un componente y devuelve la cantidad de veces que fue vendido. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ​ventas​.
*/
//Solución Niko

const soldComponents = () => {
    const soldComponentsFromSale = ventas.map(venta => venta.slice(-1));
    const soldComponentsFromList = soldComponentsFromSale.toString();
    return soldComponentsFromList.split(',');
}

const checkComponent = component => {
    if(typeof component !== "string") throw new Error("El dato ingresado no es válido");
    // if (soldComponents().findIndex(soldcomponent => soldcomponent === component) === -1) throw new Error("Este componente no lo hemos vendido o_o");
}

const cantidadVentasComponente = component => {
    checkComponent(component);
    let soldList = soldComponents();
    let timesSold = 0;
    soldList.forEach(sold => {
        if(sold === component) timesSold++;
    });
    return timesSold;
}

console.log( cantidadVentasComponente("Monitor ASC 543") ); 


// 4. componenteMasVendido(): Devuelve el nombre del componente que más ventas
// tuvo históricamente. El dato de la cantidad de ventas es el que indica la función
// cantidadVentasComponente
// console.log( componenteMasVendido() ); // Monitor GPRS 3000

const componenteMasVendido = () => {
    const componentes = precios.map(precio => precio[0]);
    let mayor = 0;
    let masVendido;
    componentes.forEach(componente => {
        const cantidadVentas = cantidadVentasComponente(componente);
        
        if(cantidadVentas > mayor) {
            mayor = cantidadVentas;
            masVendido = componente;
        }
    });
    return masVendido;

}

console.log( componenteMasVendido() ); // Monitor GPRS 3000
