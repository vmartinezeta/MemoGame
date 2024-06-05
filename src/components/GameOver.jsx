import { useNavigate } from "react-router-dom"
import { useBaraja } from "../hooks/useBaraja"
import useGanador from "../hooks/useGanador"
import Mensaje from "./Mensaje"
import MensajeCompuesto from "./MensajeCompuesto"


export default function GameOver() {
    const navigate = useNavigate()
    const { intentos, baraja, reset, time } = useBaraja()
    const ganador = useGanador({ baraja })


    const onClose = () => {
        reset()
        navigate("/")
    }


    if (!ganador && intentos > 0 && time > 0) return null



    if (intentos > 0 || time > 0) {
        return <div className="modal">
            <Mensaje title="¡Haz ganado!" visible={ganador} />
            <MensajeCompuesto title="¡Haz perdido!" subTitle="No hay más intentos" visible={!ganador && intentos === 0} />
            <MensajeCompuesto title="¡Haz perdido!" subTitle="Se agotó el tiempo" visible={!ganador && time === 0} />
            <button onClick={onClose} className="button-close">Cerrar</button>
        </div>
    }

    return <div className="modal">
        <MensajeCompuesto title="¡Haz perdido!" subTitle="Totalmente" visible={true} />
        <button onClick={onClose} className="button-close">Cerrar</button>
    </div>
}