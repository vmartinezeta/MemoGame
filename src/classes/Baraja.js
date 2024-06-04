/*Autor: Víctor Martínez*/

import BarajaArray from "./BarajaArray"
import IndexRandomArray from "./IndexRandomArray"

class Baraja {
    constructor({ cartas}) {
        this.cartas = cartas
        this.parejas = []
    }

    verCaraFrontal({ carta }) {
        this.cartas = this.cartas.map(actual => {
            if (actual.id === carta.id) {
                actual.ocultaCaraFrontal = false
                return actual
            }
            return actual
        })
    }

    restablecerRecientes() {
        this.cartas = this.cartas.map(carta => {
            if (!carta.tienePareja && !carta.ocultaCaraFrontal) {
                carta.ocultaCaraFrontal = true
                carta.tienePareja = false
            }
            return carta
        })
        return this
    }

    hacerPareja() {
        this.parejas = this.determinarParejas()
        if (!this.encontroPareja()) return
        const [{ izquierda, derecha }] = this.parejas
        this.cartas = this.cartas.map(actual => {
            if (actual.id === izquierda.id || actual.id === derecha.id) {
                actual.tienePareja = true
                return actual
            }
            return actual
        })
    }

    determinarParejas() {
        const descubiertas = this.cartas.filter(carta => !carta.tienePareja && !carta.ocultaCaraFrontal)
        this.parejas = []
        for (let i = 0; i < descubiertas.length; i++) {
            for (let j = (i + 1); j < descubiertas.length; j++) {
                if (descubiertas[i].contenido === descubiertas[j].contenido) {
                    this.parejas.push({
                        izquierda: descubiertas[i],
                        derecha: descubiertas[j]
                    })
                }
            }
        }
        return this.parejas
    }

    encontroPareja() {
        return this.parejas.length > 0
    }

    barajear() {
        const cantidad = this.cartas.length
        const hasta = cantidad - 1
        const grupo = IndexRandomArray.crear({ desde: 0, hasta, cantidad })
        const copia = this.cartas.map(carta => carta.newInstance())
        this.cartas = grupo.map(index => copia[index])
        return this
    }

    toBarajaArray() {
        return new BarajaArray({ cartas: this.cartas })
    }

    newInstance() {
        return new Baraja({ cartas: this.cartas})
    }
}

export default Baraja