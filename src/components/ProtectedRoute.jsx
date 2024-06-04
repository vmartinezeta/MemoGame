import { useBaraja } from "../hooks/useBaraja"
import { Navigate, Outlet, useLocation } from "react-router-dom"


function ProtectedRoute() {
    const { isAutorizado } = useBaraja()
    const location = useLocation()

    if (!isAutorizado && location.pathname !== "/") {
        return <Navigate to="/" replace />
    }
    return <Outlet />
}

export default ProtectedRoute