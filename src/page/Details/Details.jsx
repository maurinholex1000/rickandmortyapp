import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Details extends Component {

    render() {
        const charDetail = this.props.characterDetail;
        return (
            <div>
                <Link to="/">Ir a home</Link>
                <Link to="/favs">Ir a favoritos</Link>
                <img src={charDetail.image} alt={charDetail.name}/>
                <h2>Nombre: {charDetail.name}</h2>
                <h4>Estado: {charDetail.status}</h4>
                <p>Especie: {charDetail.species}</p>
                <p>Genero: {charDetail.gender}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        characterDetail : state.characterDetail
    }
}

export default connect(mapStateToProps, null)(Details);