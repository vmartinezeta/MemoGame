/*Autor: Víctor Martínez*/

import { useEffect } from "react"
import CartaAnimada from "../components/CartaAnimada"
import { useBaraja } from "../hooks/useBaraja"
import GameOver from "../components/GameOver"


export default function Game() {

    const { baraja } = useBaraja()
    const { voltearCartas, emparejandoCartas, desemparejarCartas, restablecer } = useBaraja()


    useEffect(() => {
        document.title = "Game"
    }, [])

    useEffect(() => {
        if (!emparejandoCartas) {
            return
        }

        const timer = setInterval(() => {
            desemparejarCartas()
            voltearCartas()
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [emparejandoCartas])


    return <div className="app">
        <div className="Baraja">
            {baraja.toArray().map((carta, index) => {
                return <CartaAnimada key={index} carta={carta} />
            })}

            <GameOver />
        </div>
    </div>
}