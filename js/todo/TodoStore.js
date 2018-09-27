import { EventEmitter } from 'events';
import TodoActionTypes from './TodoActionTypes';
import AppDispatcher from '../common/AppDispatcher';

const CHANGE_EVENT = "CHANGE_EVENT";

class TodoStore extends EventEmitter{
	constructor(){
        super();
        this._todos = [];
        this.registerDispatcher();
	}
	
	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange(){
		this.emit(CHANGE_EVENT);
	}

	getTodos(){
		return this._todos;
	}

	_addTodo(title){
		const newTodo = {
			id: new Date().getTime(),
			title,
			isCompleted: false
		};
		this._todos.push(newTodo);
	}
	
	_deleteTodo(id){
		const index = this._todos.findIndex(todo =>
			todo.id === id
		);
		this._todos.splice(index, 1);
	}
	
	_updateTodo(id, isCompleted){
		const index = this._todos.findIndex(todo =>
			todo.id === id
		);
		this._todos[index].isCompleted = isCompleted;
	}

	registerDispatcher(){
		AppDispatcher.register((action) => {
			switch(action.type){
				case TodoActionTypes.ADD_TODO:
					this._addTodo(action.title);
					break;
				case TodoActionTypes.DELETE_TODO:
					this._deleteTodo(action.id);
					break;
				case TodoActionTypes.UPDATE_TODO:
					this._updateTodo(action.id, action.isCompleted);
					break;
				default:
					return;
			}
			this.emitChange();
		});
	}
}

export default new TodoStore();