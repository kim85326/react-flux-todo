import React from 'react';
import TodoAction from '../TodoActions';

class AddTodo extends React.Component{
	constructor(){
		super();
		this.state = {
			title: ""
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleInputChange(event){
		this.setState({
			title: event.target.value
		});
	}

	handleButtonClick(){
		let title = this.state.title.trim();
		if(title){
			TodoAction.addTodo(title);
			this.setState({
				title: ""
			});
		}
	}

	render(){
		return (
			<div>
				<input 
					type="text"
					onChange={this.handleInputChange}
					value={this.state.title}
				/>
				<button onClick={this.handleButtonClick}>add todo</button>
			</div>
		);
	}
}

export default AddTodo;