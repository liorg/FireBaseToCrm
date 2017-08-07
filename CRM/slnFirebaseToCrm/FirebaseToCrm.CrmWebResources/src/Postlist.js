import React, { Component } from 'react';
import Post from './Post';

class Postlist extends Component {
    render() {
        debugger;
    var list = this.props.items.map( (item) => {
      return <Post key={item.key} item={item} />
    });
    return <div>{list.reverse()}</div>;
  }
}

export default Postlist;
