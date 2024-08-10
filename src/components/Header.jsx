export default function Header() {
    return (
        <header>
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo_store.jpg" width={100} alt="imagen logo" />
                        </a>
                        Mi tienda App
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    </nav>
                </div>
            </div>
        </header>
    )
}
