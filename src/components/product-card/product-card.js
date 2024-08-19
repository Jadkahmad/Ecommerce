// function ProductCard ({product})  {

// const {name, description, wasPrice, price, imageURL } = product ;


// return (
//     <><div className="product-card"><div className="product-card__content">
//         <img src={imageURL} alt={name} className="product-card__content__image"> </img>
//         <span className="product-card__content__title">{name}</span>
//         <div className="product-card__content__price"> {price}
//             <span className="product-card__content__price__slash">{wasPrice}</span>

//         </div>

//         <span className="product-card__content__description"> {description}</span>

//         </div>
//         </div>
//         <button>Add To Cart</button></>

// );

// }
// export default ProductCard

import { useContext } from "react";
import { MainContext } from "utils/context";
import { useNavigate } from "react-router-dom";
import { deleteProduct , UpdateArrayData } from "utils/firebaseFunctions";
import { AiFillDelete } from "react-icons/ai";
function ProductCard({ product }) {
  const { name, description, wasPrice, price, imageURL, id } = product;
  const navigate = useNavigate();
  const { user , isAdmin } = useContext(MainContext);

  const redirectToLogin = () => {
    navigate("/authenticate");
  };

  const handleDelete = async () => {
    await deleteProduct(id);
  };

  const addToCart = async () => {

    await UpdateArrayData(product);
  };
  return (
    <div className="product-card">
      <div className="product-card__content">
        <img
          src={imageURL}
          alt={name}
          className="product-card__content__image"
        ></img>
        <span className="product-card__content__title">{name}</span>
        <div className="product-card__content__price">
          {price}
          <span className="product-card__content__price__slash">
            {wasPrice}
          </span>
        </div>
        <span className="product-card__content__description">
          {description}
        </span>
        {isAdmin && (
          <AiFillDelete
            className="product-card__content__remove"
            onClick={handleDelete}
          />
        )}
      </div> 
      <button 
        onClick={user ? addToCart : redirectToLogin}
        className="product-card__btn"
      >
        Add to cart
      </button>
    </div>
  );
}
export default ProductCard;
