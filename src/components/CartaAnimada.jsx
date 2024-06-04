/*Autor: Víctor Martínez*/

import { useBaraja } from "../hooks/useBaraja"

export default function CartaAnimada({ carta }) {
    const { bloqueo, emparejandoCartas } = useBaraja()
    const { verCaraFrontal, hacerPareja, emparejarCartas } = useBaraja()


    const onElegir = () => {
        verCaraFrontal({ carta })
        hacerPareja()
        if (!emparejandoCartas) {
            emparejarCartas()
        }
    }

    if (!carta.ocultaCaraFrontal) {
        return <div className="Carta Frontal">
            <div className="Carta Cortina"></div>
            <h1 className="Carta Contenido">{carta.contenido}</h1>
        </div>
    }

    if (bloqueo) {
        return <div className="Carta"></div>
    }
    
    if (!carta.tienePareja) {
        return <div className="Carta"
            onClick={onElegir}
        >
        </div>
    }
}