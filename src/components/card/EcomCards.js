import { useEffect, useState } from 'react';
import faker from 'faker';
import SPA from '../SPA';
import "./ecomcard.css";

const array = [...Array(20)].map((val) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
}))

const EcomCards = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(array)
    // const [prod] = products;

    const handleAddItem = () => {
        // const newItems = [...cart,]
        setCart([...cart])
        console.log(cart, "carty");
        // localStorage.setItem("cart", JSON.stringify([...cart]))
    }

    const handleDelete = () => {
        localStorage.removeItem(cart);
    }

    return (
        <div className='product_parent'>
            {products.map((prod, index) => {
                const { image, name, price } = prod;
                return (
                    <div key={index} className="products">
                        <img src={image}
                            width={"100%"}
                            height="250px"
                            alt="name" />
                        <div>
                            <p>{name}</p>
                            <p>{price}</p>
                        </div>

                        {/* {!cart.includes(prod) ? */}
                        <button
                            onClick={handleAddItem}>Add To Cart</button>
                        {/* : */}
                        {/* (   <button onClick={(id) => handleDelete(id)}>Remove Cart</button>) */}
                        {/* } */}
                    </div>
                )
            })}
        </div>
    )
}

export default EcomCards;