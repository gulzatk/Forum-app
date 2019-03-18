import React from "react";
import PropTypes from "prop-types";

function Comment(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>
        <em>{props.comment}</em>
      </p>
      <h4>{props.formattedAddTime}</h4>
      <hr />
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  comment: PropTypes.string,
  formattedAddTime: PropTypes.string
};

export default Comment;
