import React from "react";
import { connect } from "react-redux";
import { addComment } from "./../actions";

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
    <div>
      <form onSubmit={handleNewCommentFormSubmission}>
        <h2>Create new Comment</h2>
        <label>Name</label>
        <input
          type="text"
          id="name"
          ref={input => {
            _name = input;
          }}
        />

        <label>Comment</label>
        <textarea
          id="comment"
          type="text"
          placeholder="write a comment"
          ref={textarea => {
            _comment = textarea;
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default connect()(NewCommentForm);
