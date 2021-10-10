import {useState, useEffect} from 'react'
import Button from './Button'
import Title from './Title'

const styles = {
    div: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: '15px',
        backgroundColor: '#25283D'
        ,borderRadius: '10%'
    }, 
    p: {
        fontSize: '2rem', 
        color: '#fff'
    }
}

function Reloj ({hora,minutos,segundos}) {
    return(
        <div style={styles.div}>
            <p style={styles.p} >{hora}</p>
            <p style={styles.p}> : {minutos} : </p>
            <p style={styles.p}>{segundos}</p>

        </div>
    )
}

export default function RelojHooks () {
    const [hora, setHora] = useState(new Date().getHours())
    const [minutos, setMinutos] = useState(new Date().getMinutes())
    const [segundos, setSegundos] = useState(new Date().getSeconds())

    const [visible, setVisible] = useState(false)

    useEffect (() => {
        let temporizador; 

        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().getHours())
                setMinutos(new Date().getMinutes())
                setSegundos(new Date().getSeconds())
            }, 1000);
        }else{
            clearInterval(temporizador)
        }

        return () => {
            clearInterval(temporizador)
        }
    }, [visible])

    return(
        <>
            <Title titulo={"Reloj with Hooks"}/>
            {visible && <Reloj hora={hora} minutos={minutos} segundos={segundos}/>}
            <Button  funcion={() => setVisible(true)} text={"+"}/>
            <Button  funcion={() => setVisible(false)} text={"-"}/>
        </>
    )
}