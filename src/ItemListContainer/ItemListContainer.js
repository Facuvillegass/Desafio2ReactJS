import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer ({title, image, description}) {
    return (
        <div className = "itemProductList">
            <div className="particularItem">
            <h2>{title}</h2>
            <img className = "imgProductList" src= {image} alt=""/>
            <ItemCount />
            <p>{description}</p>
            <button>Wanna know more!</button>
            </div>
        </div>
    )
}
export default ItemListContainer;