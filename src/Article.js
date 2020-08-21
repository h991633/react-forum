import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      category: "GongFu",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.state.category;
    const title = this.state.title;
    const content = this.state.content;
    this.props.newWriteArticle(id, title, content);
    this.props.history.push("");
  };
  render() {
    return (
      <div>
        <form action="GET" onSubmit={this.handleSubmit}>
          分類:
          <select
            id="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="GongFu">GongFu</option>
            <option value="Bluff">Bluff</option>
            <option value="Joke">Joke</option>
            <option value="Gossip">Gossip</option>
          </select>
          title:
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <div>
            {/* content:
            <input
              type="text area"
              id="content"
              value={this.state.content}
              onChange={this.handleChange}
            /> */}
            content:
            <textarea
              id="content"
              value={this.state.content}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">傳送</button>
        </form>
        <div id="error"></div>
      </div>
    );
  }
}
export default withRouter(Article);
