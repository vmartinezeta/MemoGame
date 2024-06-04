/*Autor: Víctor Martínez*/

class IndexRandomArray {
    static crear({desde, hasta, cantidad}) {
        const grupo = []
        hasta = hasta + 1
        const permitido = hasta - desde
        
        if (cantidad > permitido) {
            throw new TypeError("IndexRandomArray.crear(), cantidad fuera del rango permitido")
        }

        while(grupo.length < cantidad) {
            const random = Math.random()
            const index = Math.floor(random*hasta)
            
            if (index>=desde && !grupo.includes(index)) {
                grupo.push(index)
            }
        }
        return grupo
    }
}

export default IndexRandomArray