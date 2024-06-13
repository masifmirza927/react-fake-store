import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setPorducts] = useState([]);


    useEffect(() => {
        axios.get("https://6666d762a2f8516ff7a5313e.mockapi.io/products").then((res) => {

            setPorducts(res.data);

        }).catch(err => console.log(err))

    }, []);


    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        products.map((product, index) => {
                            return (
                                <div className='col-md-4' key={index}>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <Link to={`/product/details/${product.id}`} className="btn btn-primary">View Detail</Link>
                                            </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product