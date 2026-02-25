import { Link } from "react-router-dom"
function MainHeader() {


    return (
        <>
            <nav className=" navbar bg-body-tertiary mb-4">
                <div className="container-fluid justify-content-start">
                    <Link to="/">Bool Movies</Link>
                </div>
            </nav >
        </>
    )
}

export default MainHeader
