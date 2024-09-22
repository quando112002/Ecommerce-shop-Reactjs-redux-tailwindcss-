import { useDispatch, useSelector } from "react-redux";
import BgImage from "../assets/common/Frame.png";
import { CartActions, clearCart, selectTotalPrice } from "../redux/slice/cartSlice";
import { BodyOne, Title } from "../components/common/CustomComponents";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import StripeCheckout from "react-stripe-checkout";

export const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);

  const handleToken = (token) => {
    console.log(token);
    
    dispatch(clearCart());
  };
  return (
    <>
      <section className="mt-16 relative">
        <div className="relative h-[50vh]">
          <div className="absolute inset-0">
            <img
              src={BgImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Title level={1} className="text-primary">
              Cart
            </Title>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:space-x-10">
          <div className="lg:w-2/3">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SubTotal
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <CartPageCard
                      key={item.id}
                      id={item.id}
                      cover={item.cover}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      totalPrice={item.totalPrice}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
              <p className="text-lg font-medium text-gray-800">Cart Totals</p>
              <hr className="my-2" />
              <div className="text-lg font-medium text-gray-800 flex justify-between">
                <span>Subtotal</span>
                <span className="text-sm font-normal">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <hr className="my-3" />
              <div className="text-lg font-medium text-gray-800 flex justify-between">
                <span>Shipping</span>
                <span className="ml-3 text-sm font-normal">
                  Enter your address to view shipping options.
                </span>
              </div>
              <hr className="my-3" />
              <div className="text-lg font-medium text-gray-800 flex justify-between">
                <span>Total</span>
                <span className="text-sm font-normal">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <StripeCheckout
                token={handleToken}
                stripeKey="pk_test_51PzEY1JiPWb4lhSOAzNJyN48QyFLtfl2AzwzwRuAijFU9zfMNbVLWbLWbGc4JATAuRAAEZ4U6TQclOoqx1uX1sow000g2fJfJJ"
                mount={totalPrice * 100}
                name="Grokcoder Food Store"
                email="grokcoder@gmail.com"
                description="payment test using stribe checkout"
              >
                <button className="primary-btn mt-3 w-full">
                  Proceed to Checkout
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const CartPageCard = ({
  id,
  cover,
  name,
  price,
  quantity,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(CartActions.removeFromCart(id));
  };
  const incCartitems = () => {
    dispatch(CartActions.addToCart({ id, name, price }));
  };
  const removeCartItems = () => {
    dispatch(CartActions.removeFromAllCart(id));
  };
  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="p-4">
          {cover?.slice(0, 1).map((images, i) => (
            <img
              src={images?.image}
              alt=""
              key={i}
              className="w-24 h-24 object-cover"
            />
          ))}
        </td>
        <td className="px-6 py-4">
          <BodyOne> {name}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${price.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={incCartitems}
              className="w-8 h-8 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            >
              <BiPlus size={20} />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-8 h-8 text-primary outline-none border border-gray-300 text-center"
            />
            <button
              className="w-8 h-8 grid place-content-center bg-gray-100 text-primary border border-gray-300"
              onClick={removeCartItem}
            >
              <BiMinus size={20} />
            </button>
          </div>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${totalPrice.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={removeCartItems}
            className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white"
          >
            <IoCloseOutline size={25} />
          </button>
        </td>
      </tr>
    </>
  );
};
