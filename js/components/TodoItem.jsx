import React from 'react';
import TodoAction from './actions/TodoActions';

class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.toggleIsCompleted = this.toggleIsCompleted.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	toggleIsCompleted(){
		TodoAction.updateTodo(this.props.id, !this.props.isCompleted);
	}

	deleteTodo(){
		TodoAction.deleteTodo(this.props.id);
	}

	render(){
		return (
			<li>
				<input 
					type="checkbox"
					checked={this.props.isCompleted}
					onChange={this.toggleIsCompleted}
				/>
				<span>{this.props.title}</span>
				<button onClick={this.deleteTodo}>x</button>
			</li>
		);
	}
}

export default TodoItem;