import inquirer from "inquirer";
import colors from 'colors';

export const menuPrincipal = async () => {

    const res = await inquirer.prompt(
        {
            type: 'list',
            name: 'opcion',
            message: 'Elegí una opción'.green,
            choices: [
                {
                    value: 1,
                    name: 'Agregar gastos'
                },
                {
                    value: 2,
                    name: 'Ver mis gastos'
                },
                {
                    value: 0,
                    name: 'Salir'.red
                }
            ]
        }
    );

    return res;
}

export const agregarGasto = async () => {

    const res = await inquirer.prompt([
        {
            name: 'descripcion',
            message: 'Ingresá una descripción para el gasto: '.green,
        },
        {
            name: 'valor',
            type: 'number',
            message: 'Ingresá el valor del gasto: '.green,
            default: 0
        }
    ]);

    return res;
}