import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Result, Divider } from "antd";
export default class ForumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { total, pathParams } = this.props;
    const { category } = pathParams.match.params;
    const forum = total.filter((total) => total.category === category);
    let article = [];
    if (forum.length > 0) {
      article = forum[0].article;
    }

    return (
      <>
        {article.length === 0 ? (
          <div>
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
          </div>
        ) : (
          <div id="article" style={{ whiteSpace: "pre-wrap" }}>
            <Link to="/">回首頁</Link>
            {article.map((article) => {
              return (
                <div>
                  <Divider />
                  <span style={{ float: "right", fontSize: "40px" }}>
                    {moment(article.expiredDate).format("MM-DD")}
                  </span>

                  <span style={{ fontSize: "40px" }}>
                    <Link
                      key={article.id}
                      style={{ display: "block", padding: 5 }}
                      to={`/${forum[0].category}/${article.id}`}
                    >
                      {article.title}
                    </Link>
                  </span>
                  <span>
                    留言數:{article.commentList.length}作者:{article.author}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
