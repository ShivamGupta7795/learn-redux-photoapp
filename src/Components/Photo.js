import React, {Component} from 'react'


const Photo = (props) => {
	const post = props.post;
		return(
			<figure className = "figure">
				<img className = "photo" src = {post.imageLink} />
				<figcaption> <p> {post.description} </p> </figcaption>
				<div className= "button-container">
					<button className = "button" onClick = {() => {
						props.removePost(props.index);
					}} > Remove </button>
				</div>
			</figure>
		);
}

export default Photo