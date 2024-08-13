import { useMemo } from "react"

export const Header = ({ cart, removeProductFromCart, increaseQuantity, decreaseQuantity }) => {

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = () => cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)

    return (
        <header className="pt-3 bg-success text-white">
            <div className="container-fluid ">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo_store.png" width={100} alt="Logo Tienda App" />
                        </a>
                        Mi tienda App
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">

                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="/img/carrito.png" width={20} alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-primary text-center">El carrito esta vacio</p>
                                ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(producto => (
                                                    <tr key={producto.id}>
                                                        <td>
                                                            <img
                                                                className="img-fluid"
                                                                src="/img/producto1.jpg"
                                                                alt={producto.nombre}
                                                            />
                                                        </td>
                                                        <td>{producto.nombre}</td>
                                                        <td className="fw-bold">
                                                            ${producto.precio}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseQuantity(producto.id)}
                                                            >
                                                                -
                                                            </button>
                                                            {producto.cantidad}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(producto.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeProductFromCart(producto.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <p className="text-secondary text-end">
                                            Total pagar: <span className="text-primary fw-bold">${cartTotal()}</span>
                                        </p>

                                        <button
                                            className="btn btn-dark w-100 mt-3 p-2"
                                        >Vaciar Carrito</button>
                                    </>
                                )}




                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    )
}
