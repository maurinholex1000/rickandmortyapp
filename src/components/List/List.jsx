import React from "react";
import { connect } from "react-redux";
import { addFavorite } from '../../Redux/actions';
import Card from "../Card";

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.personajes.map((personaje, index) => {
            return (
              <Card
                key={index}
                id={personaje.id}
                name={personaje.name}
                image={personaje.image}
                status={personaje.status}
                gender={personaje.gender}
              >
                <span>
                  <button
                    onClick={() => this.props.addFavorite(personaje)}
                  >
                    FAV
                  </button>
                </span>
              </Card>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    personajes: state.charactersLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (obj) => dispatch(addFavorite(obj))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
