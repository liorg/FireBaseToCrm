import React, { Component } from 'react';
import firebaseApp from './firebase/Firebase';
import ResourceList from './ResourceList';

class PostDetail extends Component {
	constructor(props) {
		var user = firebaseApp.auth().currentUser;
    	super(props)
    	this.state = {user: user, text:"", notes:[]}
    	this.handleSubmit = this.handleSubmit.bind(this)
    	this.handleTextChange = this.handleTextChange.bind(this)
  	}
    componentWillMount(){
        debugger;
        this.props;
        //alert(this.props.params.id);
        var _this = this;
        debugger;   
        _this.setState({post: {} });
        _this.setState({resources: [] });
        var items = firebaseApp.database().ref('posts/' +this.props.params.id +"");
  		items.on('value', function(snapshot) {
  		    debugger;
  		    var obj = snapshot.val();
  		    var objResources = obj.resources;
		  _this.setState({post: obj });
		  var arr =  [];
		  for(var key in objResources) {
		      if (key) {
		          debugger;
		          var value = objResources[key];
		          alert(value);
		          objResources[key].key = key;
		          arr.push(value)
		      }
		  }
		  debugger;
		  _this.setState({resources: arr });
		});
  	}
  	handleTextChange(e) {
	    this.setState({text: e.target.value});
	  }
  	handleSubmit(e) {
  		var _this = this;
	    e.preventDefault();
	    firebaseApp.database().ref('users/' + this.state.user.uid+"/notes").push({
		    note: _this.state.text,
		  });
	} 
  render() {
    return (
      <div className="Dashboard">
      	<br/>
        <p>You’re signed is as: {this.state.user.displayName} | {this.state.user.email}</p>
   
           <div className="form-group">
				<h4 className="note-title">s </h4>         	
		        <form onSubmit={this.handleSubmit} className="form-inline col-xs-12">
		        	<input type="text" className="form-control text-input" value={this.state.post.title} placeholder="Enter Text" />
	                <input type="text" className="form-control text-input" value={this.state.post.body}  placeholder="Enter Text" /><br/>
		          	<button type="submit" className="btn btn-default">Save</button>
		        </form>
		        <br/> <br/>
		        
		        </div> 
                <div>
		        	<h4>My Source: </h4>
		         	<ResourceList items={this.state.resources} />
		        </div> 	
		    
      </div>
    );
  }
}

export default PostDetail;
