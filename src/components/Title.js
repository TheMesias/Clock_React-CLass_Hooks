import { Component } from "react";

const styles = {
    h2: {
        textTransform: 'Uppercase', 
        color: '#3c3c3c',
        fontSize: '2rem', 
        marginBottom: '15px'
    }
}
export default class Title extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
             <h2 style={styles.h2}>{this.props.titulo}</h2>
        );
    }
}