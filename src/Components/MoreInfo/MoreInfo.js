export default function MoreInfo({ item }) {
    console.log(item);
    const { id, name, img, price, info } = item;

    return (
        <div className="more-info">
            <div className="content">
                <h1>{name}</h1>
                <p>{info}</p>
                <p>{price}</p>
            </div>
            <div className="imgs">

            </div>
        </div>
    )
}