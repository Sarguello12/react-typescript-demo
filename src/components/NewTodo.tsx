import classes from "./NewTodo.module.css"
import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextRef.current!.value

        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type='text' id="text" ref={todoTextRef}/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;

// React.FC<{ onAddTodo: (text: string) => void }> : how to pass a function as a prop that takes in a string and returns a void value

// useRef<HTMLInputElement>(null) : Explicitly declares this ref will be used for a input element, these is a special HTML value for whatever you are connecting your ref to (null is the starting value)
// const enteredText = todoTextRef.current?.value : the ? siginifies the ref value could either be null or a string so enteredTexts value is "sting | undefined" incase the value cannot be extracted.
// we could use a ! to declare the connection will always be made and a value will always be extracted

// React.FormEvent: Event that occurs whenever a form or form element gets/loses focus, a form element value is changed or the form is submitted.

// this is included through react for onSubmit, it also includes MouseEvent for onClick