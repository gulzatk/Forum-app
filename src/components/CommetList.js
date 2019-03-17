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
            name={comments.name}
            comment={comments.comment}
            key={commentId}
            commentId={commentId}
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
