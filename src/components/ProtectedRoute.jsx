import { useBaraja } from "../hooks/useBaraja"
import { Navigate, Outlet, useLocation } from "react-router-dom"


function ProtectedRoute() {
    const {isPlaying} = useBaraja()
    const location = useLocation()

    if (!isPlaying && location.pathname !== "/") {
        return <Navigate to="/" replace />
    }
    return <Outlet />
}

export default ProtectedRoute