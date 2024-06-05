import { createContext, useState } from "react";
import BarajaFactory from "../classes/BarajaFactory";
import useSound from "use-sound"
import fondomp3 from "../assets/fondo.mp3"



export const BarajaContext = createContext()


const parejas = 6
const MAX_INTENTOS = 10
const MAX_TIME = 15
let barajaFactory = new BarajaFactory({ parejas})
let barajaEnJuego = barajaFactory.toBaraja().barajear()

export const BarajaProvider = ({ children }) => {
    const [baraja, setBaraja] = useState(barajaEnJuego.toBarajaArray())
    const [intentos, setIntentos] = useState(MAX_INTENTOS)
    const [bloqueo, setBloqueo] = useState(false)
    const [emparejandoCartas, setEmparejandoCartas] = useState(false)
    const [isPlaying, setPlaying] = useState(false)
    const [isActivaMusicFondo, setActivaMusicFondo] = useState(false)
    const [playbackRate, setPlaybackRate] = useState(2)
    const [vol, setVol] = useState(60)
    const [gameOver, setGameOver] = useState(false)
    const [time, setTime] = useState(MAX_TIME)
    
    const [play, { stop }] = useSound(fondomp3, {
        playbackRate,
        interrupt: true,
        loop: true,
        volume: vol / 100
    })


    const setDeltaTime = () => {
        if (time === 0) return
        setTime(time - 1)
    }

    const reset = () => {
        barajaFactory = new BarajaFactory({ parejas })
        barajaEnJuego = barajaFactory.toBaraja().barajear()
        setBaraja(barajaEnJuego.toBarajaArray())
        setIntentos(MAX_INTENTOS)
        setTime(MAX_TIME)
        setBloqueo(false)
        setPlaying(false)
        setGameOver(true)
    }

    const togglePlaybackRate = () => {
        if (playbackRate === 1) {
            setPlaybackRate(2)
        } else {
            setPlaybackRate(1)
        }
    }

    const updateVol = (newVol) => {    
        if (isNaN(newVol) && (newVol < 0 || newVol > 100)) return
        setVol(newVol)
    }

    const volUp = () => {
        if (vol === 100) return
        setVol(vol + 1)
    }

    const volDown = () => {
        if (vol === 0) return
        setVol(vol - 1)
    }

    const toggle = () => {
        setActivaMusicFondo(!isActivaMusicFondo)
    }

    const startGame = () => {
        setPlaying(true)
        setGameOver(false)
    }

    const voltearCartas = () => {
        let nuevoIntentos = intentos

        if (!barajaEnJuego.encontroPareja()) {
            nuevoIntentos--
        }

        if (nuevoIntentos === 0) {
            setIntentos(nuevoIntentos)
            setBloqueo(true)
            return
        }

        barajaEnJuego = barajaEnJuego.newInstance()
        barajaEnJuego.restablecerRecientes()
        setBaraja(barajaEnJuego.toBarajaArray())
        setIntentos(nuevoIntentos)
    }

    const emparejarCartas = () => {
        setEmparejandoCartas(true)
    }

    const desemparejarCartas = () => {
        setEmparejandoCartas(false)
    }

    const verCaraFrontal = ({ carta }) => {
        barajaEnJuego = barajaEnJuego.newInstance()
        barajaEnJuego.verCaraFrontal({ carta })
        setBaraja(barajaEnJuego.toBarajaArray())
    }

    const hacerPareja = () => {
        barajaEnJuego = barajaEnJuego.newInstance()
        barajaEnJuego.hacerPareja()
        setBaraja(barajaEnJuego.toBarajaArray())
    }


    return <BarajaContext.Provider
        value={{
            vol,
            time,
            setDeltaTime,
            gameOver,
            baraja,
            intentos,
            bloqueo,
            isPlaying,
            emparejandoCartas,
            isActivaMusicFondo,
            verCaraFrontal,
            hacerPareja,
            emparejarCartas,
            desemparejarCartas,
            voltearCartas,
            startGame,
            toggle,
            play,
            stop,
            volUp,
            volDown,
            togglePlaybackRate,
            playbackRate,
            reset,
            updateVol
        }}
    >

        {children}
    </BarajaContext.Provider>
}