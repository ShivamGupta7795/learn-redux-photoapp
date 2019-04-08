import React, {Component} from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'


const PhotoWall = (props) => {
	return(
		<div>
			<Link className = "addIcon" to="/AddPhoto">  </Link>
			<div className = "photoGrid">
				{props.posts.map(
					(post, index) => 
						<Photo post={post} key={index}  {...props} index = {index}/>)}
			</div>
		</div>
		);
}


export default PhotoWall;