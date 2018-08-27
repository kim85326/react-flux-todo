import React from 'react';
import TodoAction from './actions/TodoActions';

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
		TodoAction.addTodo(this.state.title);
		this.setState({
			title: ""
		});
	}

	render(){
		return (
			<div>
				<input type="text" onChange={this.handleChange} value={this.state.title}/>
				<button onClick={this.handleClick}>add todo</button>
			</div>
		);
	}
}

export default AddTodo;