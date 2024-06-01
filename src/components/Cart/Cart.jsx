import React, { useState, useEffect } from 'react';
import CartItems from './CartItems'; // Asegúrate de importar el componente CartItems

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Estado para los elementos en el carrito
  const [total, setTotal] = useState(0); // Estado para el total general

  // Calcula el total general sumando los precios de todos los elementos en el carrito
  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  }, [cartItems]);

  const removeFromCart = (id) => {
    // Lógica para eliminar un elemento del carrito
  };

  return (
    <div>
      {/* Mapea los elementos en el carrito y pasa el total como una prop a CartItems */}
      {cartItems.map(item => (
        <CartItems key={item.id} data={item} delFromCart={removeFromCart} total={total} />
      ))}
      {/* Muestra el total general */}
      <div>Total General: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart
