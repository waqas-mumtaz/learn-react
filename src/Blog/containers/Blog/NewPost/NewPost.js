import React, { Component } from "react";
import axios from "axios";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    post: {
      title: "",
      content: "",
      author: "Max"
    }
  };

  dataPostHandler = () => {
    const data = { ...this.state.post };
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", data)
      .then(res => console.log(res));
  };

  setInputHandler = e => {
    const post = { ...this.state.post };
    const { name, value } = e.target;
    post[name] = value;

    this.setState({ post: post });
  };
  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={this.state.post.title}
          onChange={event => this.setInputHandler(event)}
        />
        <label>Content</label>
        <textarea
          rows="4"
          name="content"
          value={this.state.post.content}
          onChange={event => this.setInputHandler(event)}
        />
        <label>Author</label>
        <select
          value={this.state.post.author}
          name="author"
          onChange={event => this.setInputHandler(event)}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.dataPostHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
