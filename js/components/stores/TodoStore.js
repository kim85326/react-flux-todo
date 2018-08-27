import { EventEmitter } from 'events';
import TodoActionTypes from '../actions/TodoActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

let _store = {
	todos: []
}

class TodoStoreClass extends EventEmitter{
	addChangeListener(callback){
		this.on("CHANGE_EVENT", callback);
	}

	removeChangeListener(callback){
		this.removeListener("CHANGE_EVENT", callback);
	}

	getTodos(){
		return _store.todos;
	}
}

AppDispatcher.register((action) => {
	switch(action.type){
		case TodoActionTypes.ADD_TODO:
			let title = action.title.trim();
			if(title){
				addTodo(title);
				TodoStore.emit("CHANGE_EVENT");
			}
			break;
		case TodoActionTypes.DELETE_TODO:
			deleteTodo(action.id);
			TodoStore.emit("CHANGE_EVENT");
			break;
		case TodoActionTypes.UPDATE_TODO:
			updateTodo(action.id, action.isCompleted);
			TodoStore.emit("CHANGE_EVENT");
			break;
		default:
    		return true;
	}
});

function addTodo(title){
	const newTodo = {
		id: new Date().getTime(),
		title,
		isCompleted: false
	};
	_store.todos.push(newTodo);
}

function deleteTodo(id){
	const index = _store.todos.findIndex(todo =>
		todo.id === id
	);
	_store.todos.splice(index, 1);
}

function updateTodo(id, isCompleted){
	const index = _store.todos.findIndex(todo =>
		todo.id === id
	);
	_store.todos[index].isCompleted = isCompleted;
}

const TodoStore = new TodoStoreClass();

export default TodoStore;