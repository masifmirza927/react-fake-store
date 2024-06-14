import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Create = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [rating, setRating] = useState(0);
    const [requesting, setRequesting] = useState(false);
    
    const notify = () => toast("Product successfully created !");

    const handleSubmit = () => {

        axios.post('https://6666d762a2f8516ff7a5313e.mockapi.io/products', {
            "title": title,
            "image": image,
            "price": price,
            "description": desc,
            "category": category,
            "on_sale": false,
            "sale_price": 0,
            "rating": rating
        }) .then(function (response) {
                notify();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className='container py-5'>
                <h3 className='mb-3'>Create a product</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='row'>

                        <div className='col-md-6'>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
                                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} id="exampleFormControlInput1" placeholder="product name" autoComplete='off' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Product Image</label>
                                <input type="text" className="form-control" onChange={(e) => setImage(e.target.value)} id="exampleFormControlInput1" placeholder="Put product image URL" autoComplete='off' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Price</label>
                                <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} id="exampleFormControlInput2" placeholder="product Price" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Category</label>
                                <select className='form-select' onChange={(e) => setCategory(e.target.value)}>
                                    <option value="2">Creams</option>
                                    <option value="3">Serums</option>
                                    <option value="4">Face Washe</option>
                                </select>
                            </div>
                        </div>

                        <div className='col-md-6'>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput5" className="form-label">Rating</label>
                                <input type="number" onChange={(e) => setRating(e.target.value)} className="form-control" id="exampleFormControlInput5" placeholder="Rating in number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDesc(e.target.value)}></textarea>
                            </div>

                        </div>

                        <button className='btn btn-warning' onClick={handleSubmit}>Create Product</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Create