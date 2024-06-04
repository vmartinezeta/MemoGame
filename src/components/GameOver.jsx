import { useNavigate } from "react-router-dom"
import { useBaraja } from "../hooks/useBaraja"
import useGanador from "../hooks/useGanador"
import Mensaje from "./Mensaje"


export default function GameOver() {
    const navigate = useNavigate()
    const { intentos, baraja, reset } = useBaraja()
    const ganador = useGanador({ baraja })


    const onClose = () => {
        reset()
        navigate("/")
    }


    if (!ganador && intentos > 0) return null


    return <div className="modal">
        <Mensaje descripcion="¡Haz ganado!" isShow={ganador} />
        <Mensaje descripcion="¡Haz perdido!" isShow={intentos === 0} />
        <button onClick={onClose} className="button-close">Cerrar</button>
    </div>
}