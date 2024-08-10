
export const Producto = () => {
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src="/img/producto1.jpg" alt="imagen producto" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">Reloj Fósil</h3>
                <p>Reloj para caballero</p>
                <p className="fw-black text-primary fs-3">$120</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
