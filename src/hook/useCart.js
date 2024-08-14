import { useEffect, useState, useMemo } from 'react'
import productos from '../data/bd_productos'

export const useCart = () => {

    const initialCart = JSON.parse(localStorage.getItem('cart')) || []

    const [data, setData] = useState([])
    const [cart, setCart] = useState(initialCart)

    const MAX_PRODUCTS_CART = 3

    useEffect(() => {
        setData(productos)
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addProductToCart = (producto) => {
        const item = cart.findIndex(prod => prod.id === producto.id)
        if (item >= 0) {
            if (cart[item].cantidad < MAX_PRODUCTS_CART) {
                console.log('El producto ya está en el carrito')
                const updatedCart = [...cart]
                updatedCart[item].cantidad++
                setCart(updatedCart)
            }
        } else {
            console.log('Producto añadido al carrito')
            setCart([...cart, { ...producto, cantidad: 1 }])
        }
    }

    const removeProductFromCart = (id) => {
        console.log('Producto eliminado del carrito:' + id)
        setCart(prevCar => prevCar.filter(prod => prod.id !== id))
    }

    const increaseQuantity = (id) => {
        //opcion 1
        /* setCart(prevCar => prevCar.map(prod => {
          if (prod.id === id && prod.cantidad < MAX_PRODUCTS_CART) {
            return { ...prod, cantidad: prod.cantidad + 1 }
          } else {
            return prod
          }
        })) */

        //opcion 2
        const index = cart.findIndex(prod => prod.id === id)
        if (index >= 0 && cart[index].cantidad < MAX_PRODUCTS_CART) {
            const updatedCart = [...cart]
            updatedCart[index].cantidad++
            setCart(updatedCart)
        }
    }

    const decreaseQuantity = (id) => {
        const index = cart.findIndex(prod => prod.id === id)
        if (index >= 0 && cart[index].cantidad > 1) {
            const updatedCart = [...cart]
            updatedCart[index].cantidad--
            setCart(updatedCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = () => cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)

    return {
        data,
        cart,
        addProductToCart,
        removeProductFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }

}
