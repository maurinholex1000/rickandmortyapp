import React from "react";
import { connect } from "react-redux";
import Card from "../Card";

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.personajes.map((personaje, index) => {
                return <Card key={index} id={personaje.id} name={personaje.name} image={personaje.image} status={personaje.status} gender={personaje.gender}/>
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

export default connect(mapStateToProps, null)(List);
