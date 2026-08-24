import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//importo le icon
import { faHouse } from "@fortawesome/free-solid-svg-icons"

function MainHeader() {
    return (
        <nav className="navbar navbar-dark mb-4 shadow-sm" style={{ backgroundColor: '#0b132b', borderBottom: '2px solid #06b6d4' }}>
            <div className="container-fluid px-4 py-1">
                <h1 className="m-0 fw-bold" style={{ letterSpacing: '2px', color: '#06b6d4' }}>
                    BOOVIES <span style={{ fontSize: '1.2rem' }}>🐈‍⬛</span>
                </h1>

                <Link to="/" className="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <FontAwesomeIcon icon={faHouse} size="lg" />
                </Link>
            </div>
        </nav>
    )
}

export default MainHeader