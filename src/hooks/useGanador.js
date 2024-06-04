import { useEffect, useState } from "react"

export default function useGanador({baraja}) {
    const [ganador, setGanador] = useState(false)

    useEffect(()=> {
        const sinParejas = baraja.toArray().filter(carta=>{
            return !carta.tienePareja
        })

        if (sinParejas.length===0) {
            setGanador(true)
        } else {
            setGanador(false)
        }
    }, [baraja])

    return ganador
}