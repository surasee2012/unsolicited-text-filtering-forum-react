import "./App.css";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './contrainers/Home';
import Playground from './contrainers/Playground';
import NewPost from './contrainers/NewPost';
import Post from './contrainers/Post';

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/playground" component={Playground} />
        <Route exact path="/newpost" component={NewPost} />
        <Route exact path="/post/:key" component={Post} />
      </Switch>
    );
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;