/*Autor: Víctor Martínez*/

import Carta from "./Carta"
import Baraja from "./Baraja"
import IndexRandomArray from "./IndexRandomArray"


export default class BarajaFactory {
    constructor({ parejas }) {
        const cantidad = parejas
        const abecedario = this.crearAbecedario().map(l => l.toLocaleUpperCase())
        const hasta = abecedario.length - 1
        let indexArray = IndexRandomArray.crear({ desde: 0, hasta, cantidad })
        indexArray = indexArray.concat(indexArray)
        let id = 0
        this.cartas = indexArray.map(index => {
            id = id + 1
            const contenido = abecedario[index]
            return new Carta({ id, contenido })
        })

    }

    crearAbecedario() {
        const abecedario = []
        for (let i = 97; i < 123; i++) {
            abecedario.push(String.fromCharCode(i))
        }
        return abecedario
    }

    toBaraja() {
        return new Baraja({ cartas: this.cartas })
    }

}