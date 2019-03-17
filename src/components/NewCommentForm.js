import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";

function NewCommentForm(props) {
  let _name = null;
  let _comment = null;

  function handleNewCommentFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: "ADD_COMMENT",
      name: _name.value,
      comment: _comment.value
      // id: v4()
    };
    dispatch(action);
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
