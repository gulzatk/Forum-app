import React, { Component } from "react";
import "./App.css";
import NewCommentForm from "./components/NewCommentForm";
import CommentList from "./components/CommetList";
import { Switch, Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class App extends Component {
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
