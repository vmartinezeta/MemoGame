import React, { useEffect } from 'react'
import { useBaraja } from '../hooks/useBaraja' 


function ToggleMusicFondo() {
    const { toggle, isActivaMusicFondo, play, stop } = useBaraja()

    useEffect(() => {
        if (isActivaMusicFondo) {
            play()
        } else {
            stop()
        }
    }, [isActivaMusicFondo])



    if (!isActivaMusicFondo) {
        return <h1 className="musicaFondo" onClick={toggle}>&#x10102; Música de fondo</h1>
    }

    return <h1 className="musicaFondo" onClick={toggle}>&#x1F5F9; Música de fondo</h1>
}

export default ToggleMusicFondo