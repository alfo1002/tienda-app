
import './App.css'
import { Header } from './components/Header'
import { Producto } from './components/Producto'
import { useCart } from './hook/useCart'

function App() {

  const {
    data,
    cart,
    addProductToCart,
    removeProductFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart()

  return (
    <>
      <Header
        cart={cart}
        removeProductFromCart={removeProductFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      <main className="container-xl">
        <h2 className="text-center pt-3">Catálogo de Productos</h2>

        <div className="row mt-5">
          {data.map((prod) => (
            <Producto
              key={prod.id}
              producto={prod}
              addProductToCart={addProductToCart}

            />
          ))}

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Tienda App - Derechos Reservados 2024</p>
        </div>
      </footer>

    </>
  )
}

export default App
