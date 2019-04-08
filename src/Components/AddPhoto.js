import React, {Component} from 'react'

class AddPhoto extends Component{

	constructor(){
		super();

	}

	handleSubmit = (event) => {
		event.preventDefault();
		const link = event.target.elements.link.value;
		const description = event.target.elements.description.value;

		const postPhoto = {
			id: 0,
			description: description,
			imageLink: link
		};

		this.props.onAddPhoto(postPhoto);
	}	


	render(){
		return(

		<div>
			<div>
				<h1>
					Add your photos here
				</h1>
			</div>
			<div className = "form">
				<form onSubmit = {this.handleSubmit}>
					<input type = "text" placeholder = "Link" name = "link" />
					<input type = "text" placeholder = "Description" name = "description" />
					<button> Post </button>
				</form>
			</div>
		</div>


		);
	}
}

export default AddPhoto