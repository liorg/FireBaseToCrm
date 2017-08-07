import React, { Component } from 'react';
import firebaseApp from './firebase/Firebase';
import { Link, hashHistory } from 'react-router'
class Post extends Component {
	constructor(props) {
		super(props)
		this.show = this.show.bind(this)

	}
    show(){
        debugger;

		//var user = firebaseApp.auth().currentUser;
		//firebaseApp.database().ref('users/' + user.uid+"/notes/"+this.props.item.key).remove();
	}
    render() {
        return <div className="note" key={this.props.item.key}>{this.props.item.title}
                 <Link to={"/p/"+ this.props.item.key}><button className="btn btn-default">detail</button></Link>  
                </div>;
  	}
}

export default Post;
