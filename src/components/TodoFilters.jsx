
const TodoFilters = ({ itemsLength, onClearCompleted, onChangeFilter, activeFilter }) => {
    return <>
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-3">
                {itemsLength} items
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
                <button type="button" className={"btn btn-link " + (activeFilter != 'all' ? 'text-muted' : '')} onClick={() => onChangeFilter('all')}>All</button>
                <button type="button" className={"btn btn-link " + (activeFilter != 'active' ? 'text-muted' : '')} onClick={() => onChangeFilter('active')}>Active</button>
                <button type="button" className={"btn btn-link " + (activeFilter != 'completed' ? 'text-muted' : '')} onClick={() => onChangeFilter('completed')}>Completed</button>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3 text-end">
                <button type="button" className="btn btn-link" onClick={onClearCompleted}>Clear completed</button>
            </div>
        </div>
    </>
}

export default TodoFilters
