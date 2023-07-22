import React, { useEffect, useState } from 'react';

const About = () => {
    const [data, ssetData] = useState(JSON.parse(localStorage.getItem("cart")));

    useEffect(() => {
        ssetData(data);
    }, [])
    // console.log(data);
    return (
        <div className='product_parent'>
            {data && data.map((val) => {
                const { id, image, name, price } = val;

                return (
                    <div key={id} className="products">
                        <img src={image}
                            width={"100%"}
                            height="250px"
                            alt="name" />
                        <div>
                            <p>{name}</p>
                            <p>{price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default About