import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

const titleStyle={
  textAlign: 'center'
}
function CommentList(props) {
  return (
    <div>
      <hr/>
      <h2 style={titleStyle}>Comments</h2>
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
