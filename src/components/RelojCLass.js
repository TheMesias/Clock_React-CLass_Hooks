import { Component } from "react";
import Button from "./Button";
import Title from "./Title";

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

class Reloj extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div style={styles.div}>
                <p style={styles.p}>{this.props.hora}</p>
                <p style={styles.p}> : {this.props.minutos} : </p>
                <p style={styles.p}>{this.props.segundos}</p>
            </div>
        );
    }
}



export default class RelojClass extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            hora: new Date().getHours(), 
            minutos: new Date().getMinutes(), 
            segundos: new Date().getSeconds(), 
            visible: false
        }
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({ 
                hora: new Date().getHours(), 
                minutos: new Date().getMinutes(), 
                segundos: new Date().getSeconds()
            })
        }, 1000);
    }

    iniciar = () => {
        this.tictac(); 
        this.setState({visible: true})
    }

    detener = () => {
        clearInterval(this.temporizador)
        this.setState({visible: false})
    }

    componentWillUnmount(){
        clearInterval(this.temporizador)
    }

    render() {
        return (
             <>
                <Title titulo={"reloj with class"}/>
                {this.state.visible && <Reloj hora={this.state.hora} minutos={this.state.minutos} segundos={this.state.segundos}/>}
                <Button funcion = {this.iniciar} text={"+"}/>
                <Button funcion ={this.detener} text={"-"} />
             </>
        );
    }
} 