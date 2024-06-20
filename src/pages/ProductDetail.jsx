import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const params = useParams();



    useEffect(() => {
        axios.get(`https://6666d762a2f8516ff7a5313e.mockapi.io/products/${params.pid}`).then((res) => {
            setProduct(res.data);
        }).catch(err => console.log(err.message))
    }, [])

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-10">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">
                                            {product.description}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductDetail