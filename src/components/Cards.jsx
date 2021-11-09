import Card from "./Card"

function Cards({ showMenu }) {
    return (
        <div className="cards">
            {showMenu.map(obj => <Card key={obj.id} obj={obj} />)}
        </div>
    );
}

export default Cards;