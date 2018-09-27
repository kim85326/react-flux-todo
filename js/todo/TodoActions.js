import TodoActionTypes from './TodoActionTypes';
import AppDispatcher from '../common/AppDispatcher';

class Actions {
	addTodo(title){
		AppDispatcher.dispatch({
			type: TodoActionTypes.ADD_TODO,
			title
		});
	}

	deleteTodo(id){
		AppDispatcher.dispatch({
			type: TodoActionTypes.DELETE_TODO,
			id
		});
	}

	updateTodo(id, isCompleted){
		AppDispatcher.dispatch({
			type: TodoActionTypes.UPDATE_TODO,
			id,
			isCompleted
		});
	}
}

export default new Actions();