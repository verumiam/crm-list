import { makeAutoObservable } from "mobx";
import { Todo } from "@/store/types";

class TodoStore {
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    initialize(newTodos: Todo[]) {
        const newIds = new Set(newTodos.map(todo => todo.id));
        this.todos = [
            ...this.todos.filter(todo => !newIds.has(todo.id)),
            ...newTodos
        ];
    }

    setTodos(todos: Todo[]) {
        this.todos = todos;
    }
}

const todoStore = new TodoStore();

export { todoStore };
