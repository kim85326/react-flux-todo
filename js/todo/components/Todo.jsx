import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoStore from '../TodoStore';

class Todo extends React.Component{
	constructor(){
		super();
		this.state = {
			todos: TodoStore.getTodos()
		};
		this.handleChangeTodos = this.handleChangeTodos.bind(this);
	}

	componentDidMount(){
		TodoStore.addChangeListener(this.handleChangeTodos);
	}

	componentWillUnmount(){
		TodoStore.removeListener(this.handleChangeTodos);
	}

	handleChangeTodos(){
		this.setState({
			todos: TodoStore.getTodos()
		});
	}

	render(){
		return (
			<div>
				<h1>Todo</h1>
				<AddTodo />
				<TodoList todos={this.state.todos}/>
			</div>
		);
	}
}

export default Todo;