import React from "react";
import Comment from "./Comment.js";

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.commentList.map((comment, index) => {
          //console.log(this.props.commentList.indexOf(comment));
          return (
            <Comment
              account={this.props.account}
              index={index}
              key={this.props.commentList.indexOf(comment)}
              id={this.props.commentList.indexOf(comment)}
              handleDelete={this.props.handleDelete}
              handleUpdate={this.props.handleUpdate}
              changeToInput={this.props.changeToInput}
              comment={comment}
            />
          );
        })}
      </div>
    );
  }
}
