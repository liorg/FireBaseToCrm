import React, { Component } from 'react';
import ResourceItem from './ResourceItem';

class ResourceList extends Component {
    render() {
        debugger;
    var list = this.props.items.map( (item) => {
        return <ResourceItem key={item.key} item={item} />
    });
    return <div>{list.reverse()}</div>;
  }
}

export default ResourceList;
