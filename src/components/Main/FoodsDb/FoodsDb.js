import Foods from "./Foods/Foods";
import { connect } from "react-redux";
import React, { Component } from "react";
import * as actions from "../../../store/actions/actions";

class FoodsDb extends Component {
  onDelete = (id) => {
    alert(id);
    // for (let i = 0; i < this.props.foods.length; i++) {
    //   if (this.props.foods[i]._id === id) {
    //     this.props.foods.splice(i, 1);
    //   }
    // }

    // this.setState({ state: this.props.foods });
    // this.props.deleteFoods(this.props.foods);
  };

  onEdit = (id) => {
    alert(id);
  };

  render() {
    let foods = null;
    if (this.props.foods) {
      foods = this.props.foods;
      return (
        <div>
          <Foods foods={foods} onDelete={this.onDelete} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Error Http Request</h1>
        </div>
      );
    }
  }
}

const mapActionToProps = (dispatch) => {
  return {
    deleteFoods: (foods) => {
      dispatch(actions.deleteFoods(foods));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    foods: state.foods,
  };
};
export default connect(mapStateToProps, mapActionToProps)(FoodsDb);
