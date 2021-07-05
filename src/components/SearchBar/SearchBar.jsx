import React, { Component } from 'react';
import { getCharacter } from '../../Redux/actions';
import {connect} from 'react-redux';


class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            personaje: ""
        };
        this.handlePersonajeChange = this.handlePersonajeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePersonajeChange(e) {
        this.setState({
            personaje: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.personaje)
        this.props.getCharacter(this.state.personaje);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Buscar" onChange={this.handlePersonajeChange}/>
                <button onClick={this.handleSubmit}>Buscar</button>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         personajes: state.charactersLoaded
//     };
// }

function mapDispatchToProps(dispatch) {
    return {
        getCharacter: (personaje) => dispatch(getCharacter(personaje))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);