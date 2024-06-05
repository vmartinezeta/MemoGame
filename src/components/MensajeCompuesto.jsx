
function MensajeCompuesto({title, subTitle, visible}) {
    if (!visible) return 

    return <h1 className="Mensaje">
        {title}
        <span className="Mensaje__span">{subTitle}</span>
    </h1>
}

export default MensajeCompuesto