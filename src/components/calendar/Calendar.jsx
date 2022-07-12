import React, {useEffect, useState} from "react";
import WooCommerceSource from "./WooCommerceSource";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Item from "./Item";

const Calendar = () => {


    const [products, setProducts] = useState(0);

    useEffect(() => {
        async function fetchData() {
            await WooCommerceSource.get('products?category=50')
                .then((res) => setProducts(res.data))
        }
        fetchData()
    }, [])
    if (products === 0){
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    } else{
        return (
            
            <CardGroup>               
                    {/* {products.forEach(product => )} */}
                    {console.log(products)}
                    {products.map((product) => {
                          

                        return(
                            <Item title={product.name} image={product.images[0].src} category={product.categories[0].name} price={product.price} />
                        )
                    })}

                    
            </CardGroup>     
   
        )

    }
    
}

export default Calendar;