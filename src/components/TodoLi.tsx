import classes from './TodoItem.module.css'

const TodoLi: React.FC<{text: string}> = (props) => {
    return (
        <li className={classes.item}>{props.text}</li>
    )
}

export default TodoLi;