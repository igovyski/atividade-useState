import { useState } from 'react'

export default function Estados(){

    const [texto, setTexto] = useState('MARCIO')

    function handleMudar(){
        setTexto(texto+'O')
    }


    return(
        <>
            <section>
                <h2>Texto: {texto} </h2>
                <button onClick={handleMudar}>Mudar</button>
            </section>
        </>
    )
}