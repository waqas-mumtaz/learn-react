import React, { Component } from "react";
import Posts from '../Blog/Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost'

import "./Blog.css";

class Blog extends Component {

  render() {
   
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/posts' exact>Home</NavLink>
              </li>
              <li>
              <NavLink to=
              {{ pathname:'/new-post'}}
              >New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
       <section>

       <Switch>
       <Route path="/posts" component={Posts} />
       <Route path="/new-post" component={NewPost} />
        <Redirect to='/posts' from='/' />
       </Switch>
       </section>
        <section>
          {/* <FullPost id={this.state.postId} /> */}
        </section>
        <section>
          {/* <NewPost /> */}
        </section>
      </div>
    );
  }
}

export default Blog;
