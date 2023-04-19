import { agregarGasto, menuPrincipal } from "./mensajes.js";
import { guardarGasto, leerListaDeGastos } from "./helpers.js";
import colors from 'colors'

console.log(Math.random())

const main = async () => {
    let res;
    const listaDeGastos = await leerListaDeGastos();

    do {
        res = await menuPrincipal();
        
        switch (res.opcion) {
            case 1:
                const gasto = await agregarGasto();
                guardarGasto(gasto, listaDeGastos);
                break;
            case 2:
                console.log('Lista de gastos: '.cyan)
                let total = 0;
                for (let gasto in listaDeGastos) {
                    total += listaDeGastos[gasto].valor;
                    console.log(listaDeGastos[gasto])
                }
                console.log('Total:'.cyan, total);
            default:
                break;
        }

    } while (res.opcion !== 0);

}

main()