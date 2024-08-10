import './App.css'
import Header from './components/Header'
import { Producto } from './components/Producto'

function App() {

  return (
    <>
      <Header />
      <main className="container-xl">
        <h2 className="text-center">Nuestros Productos</h2>

        <div className="row mt-5">
          <Producto />
          <Producto />
          <Producto />
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
