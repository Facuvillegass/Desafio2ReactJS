import "./ItemList.css"

function ItemList ({title, image, description}) {
    return (
        <div className = "itemProductList">
            <div className="particularItem">
            <h2>{title}</h2>
            <img className = "imgProductList" src= {image} alt=""/>
            <p>{description}</p>
            <button>Wanna know more!</button>
            </div>
        </div>
    )
}
export default ItemList;