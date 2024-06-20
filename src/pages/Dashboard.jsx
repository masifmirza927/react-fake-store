import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const notify = () => toast("Product successfully deleted !");

    useEffect( () => {
        axios.get("https://6666d762a2f8516ff7a5313e.mockapi.io/products").then( (res) => {
            setProducts(res.data);
            setDeleted(false);
        }).catch( err => console.log(err.message)) 
    }, [deleted]);


    const handleDelete = (id) => {
        axios.delete(`https://6666d762a2f8516ff7a5313e.mockapi.io/products/${id}`).then( () => {
            notify();
            setDeleted(true);
        }).catch( (err) => console.log(err.message))
    }

    return (
        <>
            <div className='container'>
                <div className='w-75 mx-auto'>
                    <h1 className='my-3'>Products Dashboard</h1>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map( (product, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td><img src={product.image} width="50px" /></td>
                                            <td>{product.title}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <Link to={`/product/update/${product.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                                                <button onClick={ () => handleDelete(product.id) } className='btn btn-danger btn-sm'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Dashboard    