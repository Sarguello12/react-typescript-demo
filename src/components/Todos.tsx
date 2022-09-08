import React from "react";
import Todo from "../models/todo";
import TodoLi from "./TodoLi";


const Todos: React.FC<{items: Todo[]}> = (props) => {

    return (
        <ul>
            {props.items.map(item => <TodoLi key={item.id} text={item.text}/>)}
        </ul>
    );
}

export default Todos;

// React.FC: dype definition that declares this component is a functional component (generic type) DECLARES A FUNCTIONAL COMPONENT
// <{items: Todo[]}> : prop will be a Todo object, this allows us to add our own prop definition to the previously declared defenition in React.FC DECLARES CUSTOM PROPS PASSED INTO COMPONENT