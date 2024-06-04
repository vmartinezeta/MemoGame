import ReactDOM from 'react-dom/client'
import "./styles.css"
import App from './App'


document.title = "Baraja de cartas"
const app = document.createElement("div")
document.body.appendChild(app)


ReactDOM.createRoot(app).render(<App />)