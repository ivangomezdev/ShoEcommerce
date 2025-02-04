// components/PaymentComponent.js
import { cartAtom } from '@/hooks/UseCart';
import axios from 'axios';
import { useAtom } from 'jotai';
import { BlackButton } from './ui/Buttons';


const PaymentComponent = () => {
  const [cartItems] = useAtom(cartAtom); //los items del carrito

  const handlePayment = async () => {
    if (cartItems.length === 0) {
      console.error("No hay productos en el carrito.");
      return;
    }

    const transactionId = "transaccion_123"; // Genera o maneja un ID de transacción único

    try {
      const response = await axios.post('/api/order', {
        items: cartItems,
        transactionId,
      });

      // Redirige al usuario a la URL de pago
      window.location.href = response.data.init_point;
    } catch (error) {
      console.error("Error al crear la preferencia de pago:", error);
    }
  };

  return (
    <BlackButton style={{cursor:"pointer"}} className="cartCheckOut__button" onClick={handlePayment}>
      Comprar
    </BlackButton>
  );
};

export default PaymentComponent;