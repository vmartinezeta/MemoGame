import React from 'react'
import { useBaraja } from '../hooks/useBaraja'

function ControlVol() {

    const { volUp, volDown, vol, updateVol } = useBaraja()

    const handleMas = () => {
        volUp()
    }

    const handleMenos = () => {
        volDown()
    }

    const handleChange = e => {
        updateVol(+e.target.value)
    }

    return <div className="control">
        <button className="boton boton__menos" onClick={handleMenos}>-</button>
        <div className="bar">
            <h1 className="bar__title">{vol}%</h1>
            <input className="bar__input" type="range" value={vol} onChange={handleChange} />
        </div>
        <button className="boton boton__mas" onClick={handleMas}>+</button>
    </div>
}

export default ControlVol