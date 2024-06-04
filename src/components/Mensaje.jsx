/*Autor: Víctor Martínez*/

export default function Mensaje({ descripcion, isShow }) {

    if (!isShow) return
    return <h1 className="Mensaje">{descripcion}</h1>
}