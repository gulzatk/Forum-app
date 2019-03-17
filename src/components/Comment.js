import React from "react";
import PropTypes from "prop-types";

function Comment(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>
        <em>{props.comment}</em>
      </p>
      <hr />
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
  id: PropTypes.string
};

export default Comment;
