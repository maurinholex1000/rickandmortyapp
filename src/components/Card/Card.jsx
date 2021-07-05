import React from "react";
import { Link } from "react-router-dom";
import { getDetail } from "../../Redux/actions";
import { connect } from "react-redux";

class Card extends React.Component {
  getDetailOnClick(id) {
    console.log(id);
    this.props.getDetail(id);
  }

  render() {
    return (
      <div>
        <Link
          to={`/detail/${this.props.id}`}
          onClick={() => this.getDetailOnClick(this.props.id)}
        >
          <p>{this.props.name}</p>
        </Link>
        {/* este es el boton de fav o eliminar fav */}
        {this.props.children}
        <img src={this.props.image} alt={this.props.id}></img>
        <p>{this.props.status}</p>
        <p>{this.props.gender}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail: (id) => dispatch(getDetail(id)),
  };
}

export default connect(null, mapDispatchToProps)(Card);
