import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.getTodoLis = this.getTodoLis.bind(this);
	}

	getTodoLis(){
		let todoLis = [];
		for(let index in this.props.todos){
			const todo = this.props.todos[index];
			todoLis.push(
				<TodoItem 
					key={todo.id}
					id={todo.id}
					title={todo.title}
					isCompleted={todo.isCompleted}
				/>
			);
		}
		return todoLis;
	}

	render(){
		return (
			<ul>
				{this.getTodoLis()}
			</ul>
		);
	}
}

export default TodoList;