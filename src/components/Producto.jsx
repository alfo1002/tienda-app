
export const Producto = ({ producto, addProductToCart }) => {
    const { id, nombre, categoria, descripcion, ruta, estado, precio } = producto

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src="/img/producto1.jpg" alt="imagen producto" />
            </div>
            <div className="col-8">
                <h3 className="fs-4 fw-bold text-uppercase text-primary">{nombre}</h3>
                <p>Descripción:{descripcion}</p>
                <h6>{categoria}</h6>
                <h5 className="text-primary fs-3 text-center">${precio}</h5>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addProductToCart(producto)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
