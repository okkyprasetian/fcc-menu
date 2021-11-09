import Filter from "./Filter"

function Nav({ onFilter }) {
    return (
        <nav className="nav">
            <Filter text='All' onFilter={onFilter} category='all' />
            <Filter text='Breakfast' onFilter={onFilter} category='breakfast' />
            <Filter text='Lunch' onFilter={onFilter} category='lunch' />
            <Filter text='Shakes' onFilter={onFilter} category='shakes' />
        </nav>
    );
}

export default Nav;