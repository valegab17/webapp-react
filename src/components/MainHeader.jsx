import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//importo le icon
import { faHouse } from "@fortawesome/free-solid-svg-icons"
function MainHeader() {


    return (
        <>
            <nav className=" navbar bg-body-tertiary mb-4 ">
                <div className="container-fluid ">
                    <h1>BOOVIES</h1>
                    <Link to="/"> <FontAwesomeIcon icon={faHouse} /></Link>
                </div>
            </nav >
        </>
    )
}

export default MainHeader
