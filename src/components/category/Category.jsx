import { useEffect, useState } from "react"

function Category() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = () => {
            fetch("https://6666d762a2f8516ff7a5313e.mockapi.io/categories").then((res) => {
                return res.json();
            }).then((data) => {
                setCategories(data);
            })
        }

        getCategories();
    }, []);


    return (

        <>
            <section id="categories" className="py-5">
                <div className="container">
                    <h2 className="my-4">Makeup Categories</h2>
                    <div className="row">
                        {
                            categories.map((category, index) => {
                                return (
                                    <>
                                        <div className="col-md-3">
                                            <div className="topImg">
                                                <img src={category.image} className="img-fluid" />
                                            </div>
                                            <h3 className="text-center">{category.name}</h3>
                                        </div>
                                    </>
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