function Card({ obj }) {

    const capitalizeMe = texts => {
        texts = texts.split(' ')
        for (let i = 0; i < texts.length; i++) {
            texts[i] = texts[i].split('')
            texts[i][0] = texts[i][0].toUpperCase()
            texts[i] = texts[i].join('')
        }
        return texts.join(' ')
    }

    return (
        <div className="card">
            <div className="card-img" style={{ backgroundImage: `url(${obj.img})` }}>
            </div>
            <div className="card-detail">
                <div className="top-detail">
                    <h3 className="title-detail">{capitalizeMe(obj.title)}</h3>
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