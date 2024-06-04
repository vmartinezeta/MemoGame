/*Autor: Víctor Martínez*/

export default class Carta {
    constructor({
        id,
        contenido,
        ocultaCaraFrontal = true,
        tienePareja = false
    }) {
        this.id = id
        this.contenido = contenido
        this.ocultaCaraFrontal = ocultaCaraFrontal
        this.tienePareja = tienePareja
    }

    newInstance() {
        return new Carta({
            id: this.id,
            contenido: this.contenido,
            ocultaCaraFrontal: this.ocultaCaraFrontal,
            tienePareja: this.tienePareja
        })
    }

}