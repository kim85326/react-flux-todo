import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.getTodoLis = this.getTodoLis.bind(this);
	}

	getTodoLis(){
		let todoLis = [];
		for(let todo of this.props.todos){
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