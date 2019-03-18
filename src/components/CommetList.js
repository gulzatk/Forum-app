import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

function CommentList(props) {
  return (
    <div>
      <h2>List of comments</h2>
      {Object.keys(props.commentList).map(function(commentId) {
        let comments = props.commentList[commentId];
        return (
          <Comment
            key={commentId}
            id={commentId}
            name={comments.name}
            comment={comments.comment}
            formattedAddTime={comments.formattedAddTime}
          />
        );
      })}
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.object
};

export default CommentList;
