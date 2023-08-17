
const TodoItem = ({ todo, onDelete, onMarkAsCompleted }) => {
    return <>
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <span className="d-block">{todo.description}</span>
                {!todo.completed ? <button type="button" className="btn btn-link p-0 text-decoration-italic" onClick={() =>
                    onMarkAsCompleted(todo.id)}>
                    <i>Mark as completed</i></button> : <i className="text-success">Completed</i>}
            </div>
            <button type="button" className="btn btn-dark text-decoration-none" onClick={() => onDelete(todo.id)}>Remove</button>
        </li>
    </>
}

export default TodoItem
