import React from "react";
import { connect } from "react-redux";
import { addComment } from "./../actions";
import UIkit from 'uikit';

UIkit.formCustom();

function NewCommentForm(props) {
  let _name = null;
  let _comment = null;

  function handleNewCommentFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addComment(_name.value, _comment.value));
    _name.value = "";
    _comment.value = "";
  }

  return (
    
    <div className="uk-container">
      <br/><br/>
      <form onSubmit={handleNewCommentFormSubmission} >
        <h2>Create a new comment</h2>
        <div className="uk-margin">
        <input className="uk-input uk-form-width-small"
          type="text"
          id="name"
          placeholder="Name"
          ref={input => {
            _name = input;
          }}
        />
        </div>
        <div className="uk-margin">
        <textarea className="uk-textarea uk-form-width-large" rows="6"
          id="comment"
          type="text"
          placeholder="Write a comment"
          ref={textarea => {
            _comment = textarea;
          }}
        />
        </div>
        <p uk-margin>
        <button className="uk-button uk-button-primary" type="submit">Post</button>
        </p>
      </form>
      <br/>
      <hr/>
    </div>
  );
}

export default connect()(NewCommentForm);
