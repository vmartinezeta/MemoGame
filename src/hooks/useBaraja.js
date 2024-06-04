import { BarajaContext } from "../context/BarajaContext"
import { useContext } from "react"


export const useBaraja = () => {
    const context = useContext(BarajaContext)
    if (!context) {
        throw new TypeError("Falta el BarajaProvider")
    }
    return context
}
