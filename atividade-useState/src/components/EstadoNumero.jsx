import { useState } from 'react'

export default function Estados(){
    const [numero, setNumero] = useState(10)

    function handleAumentar(){
        setNumero(numero+5)
    }

    function handleDiminuir(){
        setNumero(numero-2)
    }


    return(
        <>
            <section>
                <h2>Numero: {numero}</h2>
                <button onClick={handleAumentar}>Aumentar</button>
                <button onClick={handleDiminuir}>Diminuir</button>
            </section>
        </>
    )
}