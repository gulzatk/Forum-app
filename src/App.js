import * as actions from "./actions";
import React, { Component } from "react";
import "./App.css";
import NewCommentForm from "./components/NewCommentForm";
import CommentList from "./components/CommetList";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import constants from "./constants";
import Moment from "moment";
import "../node_modules/uikit/dist/css/uikit.css";
const { constant } = constants;

class App extends Component {
  
  componentDidMount() {
    this.elapsedTimeUpdateTimer = setInterval(
      () => this.updateCommentElapsedTime(),
      60000
    );
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseCommentsRef } = actions;
    dispatch(watchFirebaseCommentsRef());
  }

  updateCommentElapsedTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.comments).map(commentId => {
      const comment = this.props.comments[commentId];
      const newFormattedAddTime = new Moment(comment.addTime).from(
        new Moment()
      );
      const action = {
        type: constant.UPDATE_ELAPSED_TIME,
        id: commentId,
        formattedAddTime: newFormattedAddTime
      };
      dispatch(action);
    });
  }

  render() {
    return (
      <div>
        <NewCommentForm />
        <CommentList commentList={this.props.comments} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};

App.propTypes = {
  comments: PropTypes.object
};
export default withRouter(connect(mapStateToProps)(App));
