import React,{useEffect,useState} from 'react'
import ShowProduct from '../components/ShowProduct'

function Product() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(prod=>{
                console.log(prod)
                setproducts(prod)
            
            })
    }, [])
    console.log(products)
    return (
        <>
            {products.map((product)=>(
                <ShowProduct product={product}/>
            ))}
        </>
    )
}

export default Product
