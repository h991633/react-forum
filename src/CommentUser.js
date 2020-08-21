import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

function CommentUser(props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {createElement(action === "liked" ? LikeFilled : LikeOutlined, {
          onClick: like,
        })}
      </Tooltip>
      <span className="comment-action">{likes}</span>
    </span>,
    <span key="comment-basic-dislike">
      <Tooltip title="Dislike">
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined,
          {
            onClick: dislike,
          }
        )}
      </Tooltip>
      <span className="comment-action">{dislikes}</span>
    </span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>{props.userId}</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<p>{props.comment}</p>}
      datetime={
        <Tooltip title={moment(props.expiredDate).format("YYYY-MM-DD hh:mm")}>
          <span>{moment(props.expiredDate).format("YYYY-MM-DD hh:mm")}</span>
        </Tooltip>
      }
    />
  );
}
export default CommentUser;