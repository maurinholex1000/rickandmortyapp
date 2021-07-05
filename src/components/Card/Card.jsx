import React from 'react'
import {Link} from 'react-router-dom';

class Card extends React.Component {

    render() {
        return (<div>
            <Link to={`/detail/${this.props.id}`}><p>{this.props.name}</p></Link><span><button>FAV</button></span>
            <img src={this.props.image} alt={this.props.id}></img>
            <p>{this.props.status}</p>
            <p>{this.props.gender}</p>

        </div>)
    }
}


export default Card;