import TodoItem from './TodoItem'

const TodoList = ({ todos, onDelete, onMarkAsCompleted }) => {
    return <>
        <ul className="list-group list-group-flush">
            {
                todos.length == 0 ? <li className="list-group-item">No todos</li> : todos.map(todo =>
                    <TodoItem todo={todo} onDelete={onDelete} onMarkAsCompleted={onMarkAsCompleted} key={todo.id}/>)
            }
        </ul>
    </>
}

export default TodoList
