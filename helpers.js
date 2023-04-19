import fs from 'fs';

const path = './data.json';

export const guardarGasto = (gasto, listaDeGastos = {}) => {
    
    const randomId = Math.random().toString(36).substring(2, 8 + 2);

    listaDeGastos[randomId] = gasto;
    fs.writeFileSync(path, JSON.stringify(listaDeGastos));
}

export const leerListaDeGastos = () => {

    if (fs.existsSync(path)) {
        const info = fs.readFileSync(path, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        return data;
    }

    return {};
}