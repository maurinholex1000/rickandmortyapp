import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import { removeFavorite } from "../../Redux/actions";
import {Link} from 'react-router-dom';

class Favourite extends Component {
  render() {
    return (
      <div>
          <Link to="/">Ir a home</Link>
        <ul>
          {this.props.favoritos.map((personaje, index) => {
            return (
              <div>
                <Card
                  key={index}
                  id={personaje.id}
                  name={personaje.name}
                  image={personaje.image}
                >
                  <span>
                    <button
                      onClick={() => this.props.removeFavorite(personaje.id)}
                    >
                      X
                    </button>
                  </span>
                </Card>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoritos: state.characterFavourites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
