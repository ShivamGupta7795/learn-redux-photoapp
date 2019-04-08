import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/action'

class Main extends Component{

	constructor(){
		super();
	}

	componentDidMount(){
		this.props.dispatch(removePost(1));
	}

	render(){
		return(
			<div>

				<Route exact path="/" render={()=>(
					<div>
						<Title title = "Photo App" />
						{console.log(this.props)}
						<PhotoWall posts = {this.props.posts} onPostRemove = {this.removePhoto}/>
					</div>
				)}/>
					
				{/* <Route path="/AddPhoto" render = {({history}) => (
					<AddPhoto onAddPhoto = {(addedPost) => {
						console.log(addedPost);
						this.addPhoto(addedPost);
						
						history.push("/");
					}}/>
					
				)}/> */}
			</div>
		)
	}
}

export default Main