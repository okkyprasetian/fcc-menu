function Filter({ text, onFilter, category }) {
    return (
        <div className="filter" onClick={() => onFilter(category)} >
            {text}
        </div>
    );
}

export default Filter;