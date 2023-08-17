import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoFilters from "./components/TodoFilters"

const App = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            description: '📔 Read a book',
            completed: true,
        },
        {
            id: 2,
            description: '📝 Learn english',
            completed: false,
        },
    ])
    const [description, setDescription] = useState('')
    const [filter, setFilter] = useState('all')

    const onChangeDescription = (e) => {
        const { value } = e.target

        setDescription(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (description == '') {
            alert('Fill the input')
            return
        }

        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                description: description,
                completed: false
            }
        ])

        setDescription('')
    }

    const onDelete = (id) => {
        const tds = todos.filter(todo => todo.id != id)

        setTodos(tds)
    }

    const onMarkAsCompleted = (id) => {
        const tds = todos.map(todo => {
            if (todo.id == id)
                todo.completed = true

            return todo
        })

        setTodos(tds)
    }

    const onClearCompleted = () => {
        setTodos(todos.filter(todo => todo.completed != true))
    }

    const onChangeFilter = (filter) => {
        setFilter(filter)
    }

    const filteredTodos = () => {
        let tds = todos.filter(todo => {
            switch (filter) {
                case 'active':
                    return todo.completed == false
                case 'completed':
                    return todo.completed == true
                default:
                    return todo
            }
        })

        return tds
    }

    return <>
        <div className="container my-4">

            <h3 className="text-center fw-bold mb-4">Simple TODO with React</h3>

            <div className="mx-auto" style={{ maxWidth: 760 }}>

                {/* todo form */}
                <TodoForm onSubmit={onSubmit} onChange={onChangeDescription} value={description} />

                {/* todo list */}
                <div className="card mb-3">
                    <div className="card-body">

                        <TodoList todos={filteredTodos()} onDelete={onDelete} onMarkAsCompleted={onMarkAsCompleted} />

                    </div>
                </div>

                {/* todo filters */}
                <div className="card">
                    <div className="card-body">

                        <TodoFilters itemsLength={filteredTodos().length} onClearCompleted={onClearCompleted} onChangeFilter={onChangeFilter} activeFilter={filter} />

                    </div>
                </div>

            </div>

        </div>
    </>
}

export default App
