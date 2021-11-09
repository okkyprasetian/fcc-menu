function Card({ obj }) {
    return (
        <div className="card">
            <div className="card-img" style={{ backgroundImage: `url(${obj.img})` }}>
            </div>
            <div className="card-detail">
                <div className="top-detail">
                    <h3 className="title-detail">{obj.title}</h3>
                    <p className="price-detail">${obj.price}</p>
                </div>
                <div className="bottom-detail">
                    <p>{obj.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;