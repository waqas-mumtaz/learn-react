import React, { Component, Fragment } from "react";
import axios from "../../../../axios-order";
import { Route } from "react-router-dom";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import { Link } from "react-router-dom";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    postId: null
  };

  postSelectedHandler = id => {
    // this.setState({ postId: id });
    this.props.history.push({ pathname: this.props.match.url + "/" + id });
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const posts = res.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Max"
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }


  render() {
    const posts = this.state.posts.map(post => (
      // <Link to={this.props.match.url + '/' + post.id} key={post.id} >
      <Post
        title={post.title}
        author={post.author}
        key={post.id}
        clicked={() => this.postSelectedHandler(post.id)}
      />
      // </Link>
    ));

    return (
      <Fragment>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          
          component={FullPost}
        />
      </Fragment>
    );
  }
}

export default Posts;
