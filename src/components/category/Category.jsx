import { useEffect, useState } from "react"
import axios from "axios";

function Category() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIslaoding] = useState(false);


    useEffect(() => {

        setIslaoding(true);
        axios.get("https://6666d762a2f8516ff7a5313e.mockapi.io/categories")
            .then((res) => {
                setCategories(res.data);
            }).catch((err) => {
                console.log(err);

            }).finally(() => {
                setIslaoding(false);
            })
    }, []);


    return (

        <>
            <section id="categories" className="py-5">
                <div className="container">
                    <h2 className="my-4">Makeup Categories</h2>
                    <div className="row">
                        {
                            (isLoading === true) ? <div class="spinner-border text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div> : null
                        }
                        {
                            categories.map((category, index) => {
                                return (
                                    <div className="col-md-3" key={index}>
                                        <div className="topImg">
                                            <img src={category.image} className="img-fluid" />
                                        </div>
                                        <h3 className="text-center">{category.name}</h3>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>

        </>
    )
}

export default Category