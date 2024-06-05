import React, { useEffect } from 'react'
import { useBaraja } from '../hooks/useBaraja'
import { useNavigate } from "react-router-dom"
import ToggleMusicFondo from '../components/ToggleMusicFondo'
import ControlVol from '../components/ControlVol'
import TogglePlaybackRate from '../components/TogglePlaybackRate'


function Home() {
    const { startGame, gameOver} = useBaraja()
    const navigate = useNavigate()


    useEffect(() => {
        document.title = "Home"
    }, [])


    const handleClick = () => {
        startGame()
        navigate("/game")
    }

    return <div className="main">
        <div className="main__content">
            <ToggleMusicFondo />
            <TogglePlaybackRate />
            <ControlVol />
            <button className="boton-intentar" onClick={handleClick}>{`${gameOver ? "Reintentar" : "Iniciar"}`}</button>
        </div>
    </div>
}

export default Home