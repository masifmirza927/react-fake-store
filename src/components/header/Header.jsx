
import topImage from "../../images/top-bg.png"


function Header () {
    return(
        <>
            <div className="container h-100 d-flex flex-column justify-content-center align-items-start">
                <div className="topBgWhite">top ideas of makup</div>
                <h1 className="tagline">Glow up from the comfort <br />of your home</h1>
                <p>Welcome to BeautyBox, your one-stop online destination for all things <br />beauty! Our virtual shelves are stocked with a vast array <br />of products from renowned brands.</p>
                <div>
                    <button className="btn btn-outline-danger">Shop now</button>
                    <button type="button" className="btn btn-link">Follow instagram</button>
                </div>
            </div>
        </>
    )
}

export default Header