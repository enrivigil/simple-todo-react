
const TodoForm = ({ onSubmit, onChange, value }) => {
    return <>
        <form className="mb-3" onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Description</label>
                <input type="text" className="form-control" onChange={onChange} value={value} />
            </div>
            <button type="submit" className="btn btn-dark">Add item</button>
        </form>
    </>
}

export default TodoForm
