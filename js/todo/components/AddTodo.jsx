import React from 'react';
import TodoAction from '../TodoActions';

class AddTodo extends React.Component{
	constructor(){
		super();
		this.state = {
			title: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event){
		this.setState({
			title: event.target.value
		});
	}

	handleClick(){
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
					onChange={this.handleChange} 
					value={this.state.title}
				/>
				<button onClick={this.handleClick}>add todo</button>
			</div>
		);
	}
}

export default AddTodo;