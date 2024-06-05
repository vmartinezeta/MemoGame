/*Autor: Víctor Martínez*/

export default function Mensaje({ title, visible }) {

    if (!visible) return
    return <h1 className="Mensaje">{title}</h1>
}