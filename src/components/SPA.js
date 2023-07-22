const SPA = ({ prod, cart, setCart }) => {
    console.log(prod);
    // object destructuring
    const { image, name, price } = prod;

    const handleAddItem = () => {
        setCart([...cart, prod])
        localStorage.setItem("cart", JSON.stringify([...cart, prod]))
    }

    const handleDelete = () => {
        localStorage.removeItem(cart);
    }

    return (
        <div className="products">
            <img src={image}
                width={"100%"}
                height="250px"
                alt="name" />
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>

            {!cart.includes(prod) ?
                <button
                    onClick={handleAddItem}
                >Add To Cart</button>
                :
                (<button onClick={(id) => handleDelete(id)}>Remove Cart</button>)

            }
        </div>
    )
}

export default SPA;