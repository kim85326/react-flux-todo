import { EventEmitter } from 'events';
import TodoActionTypes from './TodoActionTypes';
import AppDispatcher from '../common/AppDispatcher';

let _store = {
	todos: []
}

const CHANGE_EVENT = "CHANGE_EVENT";

class TodoStoreClass extends EventEmitter{
	addChangeListener(callback){
		this.on("CHANGE_EVENT", callback);
	}

	removeChangeListener(callback){
		this.removeListener("CHANGE_EVENT", callback);
	}

	emitChange(){
		this.emit(CHANGE_EVENT);
	}

	getTodos(){
		return _store.todos;
	}
}

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

AppDispatcher.register((action) => {
	switch(action.type){
		case TodoActionTypes.ADD_TODO:
			addTodo(action.title);
			break;
		case TodoActionTypes.DELETE_TODO:
			deleteTodo(action.id);
			break;
		case TodoActionTypes.UPDATE_TODO:
			updateTodo(action.id, action.isCompleted);
			break;
		default:
    		return true;
	}
	TodoStore.emitChange();
});

const TodoStore = new TodoStoreClass();

export default TodoStore;