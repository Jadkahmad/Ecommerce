import { AiFillDelete } from "react-icons/ai";
import { RemoveArrayData } from "utils/firebaseFunctions";
function CartCard ({product}) {
const {imageURL , name, description, price} = product ;
const handleDelete = async () => {

    await RemoveArrayData(product);

};
    return (

        <div className="cart-card">
            <img src={imageURL} alt={name} className="cart-card__image" ></img>
            <span className="cart-card__title">{name}</span>
            <span className="cart-card__description">{description}</span>
            <span>$ {" "} {price}   </span>
            <AiFillDelete className="cart-card__icons" on onClick={handleDelete}/>





        </div>

      




    );

    


}
export default CartCard;