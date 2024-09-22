import { useDispatch } from "react-redux";
import {clearCart} from "../../redux/slice/cartSlice";
import StripeCheckout from "react-stripe-checkout";

export const CheckoutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();
  const handleToken = (token) => {
    handlePaymentSuccess();
    dispatch(clearCart());
  };
  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51PzEY1JiPWb4lhSOAzNJyN48QyFLtfl2AzwzwRuAijFU9zfMNbVLWbLWbGc4JATAuRAAEZ4U6TQclOoqx1uX1sow000g2fJfJJ"
        mount={total * 100}
        name="Grokcoder Food Store"
        email="grokcoder@gmail.com"
        description="payment test using stribe checkout"
      >
        <button className="w-full bg-gray-200 py-3.5 my*3 font-medium">
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};
