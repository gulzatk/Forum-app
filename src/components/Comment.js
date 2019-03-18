import React from "react";
import PropTypes from "prop-types";
import UIkit from 'uikit';

function Comment(props) {
  return (
  <div className="uk-container">
    <article className="uk-comment uk-comment-primary" >
    <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
       <div className="uk-width-expand">
      <h2 className="uk-comment-title uk-margin-remove">{props.name}</h2>
     <h4 className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">{props.formattedAddTime}</h4>      
    </div>
     </header>
      <div className="uk-comment-body">
      <p>
        <em>{props.comment}</em>
      </p>
      </div>
      </article>
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
