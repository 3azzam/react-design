
const list = [
    'الرئيسية',
    'من نحن',
    'الخدمات',
    'الفعاليات',
    'الكورسات',
    'الورشات',
    'الأخبار',
    'الأبحاث',
    'فريق العمل',
]

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white rounded">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars" style={{fontSize:"26px"}} ></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {list.map(l =>
                            <li key={l} className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{l}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar