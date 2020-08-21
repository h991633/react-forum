import React from "react";
import CommentList from "./CommentList.js";
import moment from "moment";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Author from "./Author";
import {  Result } from "antd";

function LoginCheck(props) {
  return props.isLogIn ? (
    ""
  ) : (
    <div id="inputId">
      ID：
      <input
        id="newUserId"
        type="text"
        onChange={props.getChange}
        value={props.getValue}
      />
    </div>
  );
}

export default class Forum extends React.Component {
  constructor(props) {
    super(props);
    const { total, pathParams } = this.props;
    const { category, articleId } = pathParams.match.params;
    const forum = total.filter((total) => total.category === category);
    let article = [];
    if (forum.length > 0) {
      article = forum[0].article;
      this.state = {
        commentList: article[articleId].commentList,
        newUserId:
          typeof this.props.account === "undefined" ? "" : this.props.account,
        newContent: "",
      };
    }
  }

  //霸哥的程式

  handleDelete = (e,index) => {
    var checkDel = window.confirm("確定刪除？");
    if (checkDel !== true) {
      return;
    }
    e.preventDefault();
    const newCommentList = this.state.commentList;
    newCommentList.splice(index, 1);
    this.setState((state) => ({ commentList: newCommentList }));
    this.props.updateCommentList(
      this.props.pathParams.match.params,
      this.state.commentList
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var newCommentList = this.state.commentList;
    newCommentList.push({
      userId: this.state.newUserId,
      content: this.state.newContent,
      expiredDate: moment(),
    });
    this.props.updateCommentList(
      this.props.pathParams.match.params,
      newCommentList
    );
  };
  handleChange = (e) => {
    e.preventDefault();
    const { id } = e.target;
    const { value } = e.target;
    this.setState(() => ({
      [id]: value,
    }));
  };
  handleUpdate = (e) => {
    if (e.key === "Enter") {
      var updateId = e.target.id;
      var newCommentList = this.state.commentList;
      newCommentList[e.target.parentNode.parentNode.id].content =
        e.target.value;
      this.setState(() => ({ commentList: newCommentList }));
      this.props.updateCommentList(
        this.props.pathParams.match.params,
        this.state.commentList
      );
      this.setState(() => ({ [updateId]: undefined }));
      ReactDOM.unmountComponentAtNode(e.target.parentNode);
    }
  };
  inputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  changeToInput = (e, index) => {
    //這個fuc是修改留言的
    e.preventDefault();
    //var changeId = e.target.parentNode.id;
    var changeId = index;
    const { total, pathParams } = this.props;
    const { category, articleId } = pathParams.match.params;
    const forum = total.filter((total) => total.category === category);
    let { article } = forum[0];
    const userId = article[articleId].commentList[changeId].userId;
    console.log("userId", article[articleId].commentList[changeId].userId);

    console.log("this.props.account", this.props.account);
    if (this.props.account == userId) {
      this.setState((state) => ({
        ["edit" + changeId]: "",
      }));
      ReactDOM.render(
        <input
          onChange={this.inputChange}
          value={this.state["edit" + changeId]}
          id={"edit" + changeId}
          onKeyPress={this.handleUpdate}
        />,
        document.getElementById("change" + changeId)
      );
    } else {
      alert("你不能修改別人的留言");
    }
  };
  //霸哥的程式結束
  render() {
    // const { article } = this.props;
    const { total, pathParams } = this.props;
    const { category, articleId } = pathParams.match.params;
    const forum = total.filter((total) => total.category === category);
    // const { article } = forum[0];
    let article = [];
    let content, title, author, expiredDate;
    if (forum.length > 0) {
      article = forum[0].article;
      content = article[articleId].content;
      title = article[articleId].title;
      author = article[articleId].author;
      expiredDate = article[articleId].expiredDate;
    }
    // const { content, title, author, expiredDate } = article[articleId];
    const is404 =
      article.length === 0 &&
      !(typeof articleId === "number") &&
      !(articleId < article.length);
    return (
      <>
        {is404 ? (
          //
          <Result
            status="404"
            title="404"
            subTitle="抱歉，這個頁面不存在"
            extra={
              <Link to="/" type="primary">
                回首頁
              </Link>
            }
          />
        ) : (
          <div>
            <Link to="/">回首頁</Link> <Link to={`/${category}`}>回討論版</Link>
            <div id="article" style={{ whiteSpace: "pre-wrap" }}>
              <Author
                author={author}
                title={title}
                content={content}
                expiredDate={expiredDate}
              />
              {/* <h4>作者:{author} </h4>
              <h4>標題:{title} </h4>
              <h4>時間:{moment(expiredDate).format("YYYY-MM-DD hh:mm")} </h4>
              <br /> */}
              {/* {content} */}
            </div>
            <br />
            <CommentList
              account={this.props.account}
              commentList={this.state.commentList}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
              changeToInput={this.changeToInput}
            />
            <br />
            <form action="GET" onSubmit={this.handleSubmit}>
              <LoginCheck
                getChange={this.handleChange}
                isLogIn={this.props.isLogIn}
                getValue={this.state.newUserId}
              />

              <div>
                Comment：
                <br />
                <textarea
                  id="newContent"
                  value={this.state.newContent}
                  onChange={this.handleChange}
                  style={{ width: 500, height: 200 }}
                />
              </div>
              <button type="submit">傳送</button>
            </form>
          </div>
        )}
      </>
    );
  }
}
