import React from "react";
import Todo from "../models/todo";
import TodoLi from "./TodoLi";
import classes from "./Todos.module.css"


const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) => {

    return (
        <ul className={classes.todos}>
            {props.items.map(item => <TodoLi key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>)}
        </ul>
    );
}

export default Todos;

// React.FC: dype definition that declares this component is a functional component (generic type) DECLARES A FUNCTIONAL COMPONENT
// <{items: Todo[]}> : prop will be a Todo object, this allows us to add our own prop definition to the previously declared defenition in React.FC DECLARES CUSTOM PROPS PASSED INTO COMPONENT