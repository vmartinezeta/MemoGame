import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BarajaProvider } from "./context/BarajaContext";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";

export default function App() {
    return <BarajaProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/game" element={<Game />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </BarajaProvider>
}   