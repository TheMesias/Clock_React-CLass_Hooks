const styles = {
    button: {
        padding: '.4rem .9rem', 
        cursor: 'pointer', 
        border: 'none', 
        backgroundColor: '#FF5A5F', 
        margin: '2px',
        fontSize: '1.2rem' ,
        color: '#fff'
        ,marginBottom: '20px'
    }
}

export default function Button ({text, funcion}){
    return(
        <button style={styles.button} onClick={funcion}>{text}</button>
    )
} 