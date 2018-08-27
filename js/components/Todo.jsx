import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoStore from './stores/TodoStore';

class Todo extends React.Component{
	constructor(){
		super();
		this.state = {
			todos: TodoStore.getTodos()
		};
		this.HandleChangeTodos = this.HandleChangeTodos.bind(this);
	}

	componentDidMount(){
		TodoStore.addChangeListener(this.HandleChangeTodos);
	}

	componentWillUnmount(){
		TodoStore.removeListener(this.HandleChangeTodos);
	}

	HandleChangeTodos(){
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