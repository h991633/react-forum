import React from "react";
import { Button } from "antd";
import Author from "./Author";
import CommentUser from "./CommentUser";
export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newInput: "" };
  }
  render() {
    return (
      <div id={this.props.id}>
        <CommentUser
          userId={this.props.comment.userId}
          comment={this.props.comment.content}
          expiredDate={this.props.comment.expiredDate}
        />
        {this.props.account === this.props.comment.userId ? (
          <Button danger onClick={(e) => this.props.handleDelete(e, this.props.index)}>
            刪除
          </Button>
        ) : (
          ""
        )}
        {this.props.account === this.props.comment.userId ? (
          <Button
            id={"content" + this.props.id}
            onClick={(e) => this.props.changeToInput(e, this.props.index)}
          >
            修改
          </Button>
        ) : (
          ""
        )}
        {/* ID:{this.props.comment.userId}
        <div
          id={"content" + this.props.id}
          onDoubleClick={this.props.changeToInput}
        >
          {this.props.comment.content}
        </div> */}
        <div id={"change" + this.props.id}></div>
      </div>
    );
  }
}
